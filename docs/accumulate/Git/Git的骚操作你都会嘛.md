# Git的骚操作你都会嘛？

正式开始之前先讲个亲身经历经历的故事，在上一个公司工作有个女同事，晚上和男朋友提前说好了约会看电影，快五点了，就想着赶紧提交代码，好下班，可是她`push`了好几次，都被远端拒绝了，这时候她一狠心一跺脚用了`-f`，然后就下班去了，她倒是下班了，由于她对之前提交的代码用了`rebase`，而其他同事又基于她之前的代码开发，直接导致了其他同事的`commit id`出现了混乱，而导致当天的上线被搁置了，这是一个真实的案例，而其中的问题就在于这个女同事对`rebase`不熟悉，并采用了危险的`git`操作。因此，`git`的操作虽然简单，但在开发过程中却非常重要，如果用不好，自己的工作白费了是轻的，更糟糕的是有可能让自己成为同事厌恶的人。因此`git`用的好，将会是一个神器，用不好就是噩梦！

# 前言

首先问一下自己以下几个问题：

- 如何合并几个历史`commit`?

- 如何修改历史提交的`message`?

- 如何将某个分支的某次`commit`移到另一个分支尼？

要是你都会，那恭喜你，可以不用阅读本文了，要是还有疑惑，那就跟着我一起来学习学习吧。

# 一、基本配置

## 配置用户信息

```javascript
git config --global user.name "FrontDream"

git config --global user.email 1370336125@qq.com
```

以上配置过程中用到了`--global`，其实还有`--local`，`--system`，下面对此做一个对比，问题不大，可以不用着重考虑。

```javascript
git config --local  // local只对某个仓库有效

git config --global // global对当前用户所有仓库有效

git config --system // 不常用，对系统所有登陆用户有效
```

如果想要显示 `config` 的配置，可以加上`--list`:

```javascript
git config --list --local

git config --list --global

git config --list --system
```

## 配置文本编辑器

当用户信息设置完毕，你可以配置默认文本编辑器了，当 `Git` 需要你输入信息时会调用它。 如果没有配置，`Git` 会使用操作系统默认的文本编辑器，通常是 `Vim`。如果你想使用不同的文本编辑器，例如 `Emacs`，可以这样做：

```javascript
git config --global core.editor emacs
```

## 配置命令的别名

```javascript
git config --global alias.ci commit
```

可以通过 `git config` 文件来轻松地为每一个命令设置一个别名，如上配置后，当要输入 `git commit` 时，只需要输入 `git ci`。

# 二、建立仓库

主要有以下几种场景：

## 把已有的项目代码纳入到 Git 管理

```javascript
$cd 项目代码所在文件夹
$git init
```

## 新建的项目(没有代码)直接用 Git 管理

```javascript
$ cd 某个文件夹
$ git init your_project #会在当前路径下创建和项目名称同名的文件夹
$ cd your_project
```

## 克隆仓库

```javascript
git clone https://github.com/libgit2/libgit2
```

这会在当前目录下创建一个名为 “`libgit2`” 的目录，并在这个目录下初始化一个 `.git` 文件夹， 从远程仓库拉取下所有数据放入 `.git` 文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的 `libgit2` 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。

如果你想在克隆远程仓库的时候，自定义本地仓库的名字，你可以通过额外的参数指定新的目录名：

```javascript
git clone https://github.com/libgit2/libgit2 mylibgit
```

这会执行与上一条命令相同的操作，但目标目录名变为了 `mylibgit`。

## 添加远程仓库

当你本地已经有了代码，在 `GitHub` 上新建了一个仓库，这时候需要将远程的仓库与本地进行合并与关联。

首先你需要在仓库中获取到自己的 `SSH`:

![ssh](/Git/Git的骚操作你都会嘛/ssh.png)

通过命令：

```javascript
git remote add origin git@github.com:FrontDream/FrontDream.github.io.git
```

这样就将本地的项目与远程的项目进行了关联，如果这时候远程是有文件的如 `readme` 文件，直接`git push --all`会失败，这个时候，需要将远程的代码拉下来`git fetch`，然后再`git merge --allow-unrelated-histories origin/master`，再`git push`或者`git push -u origin master`就好了。

如果想要在某个的仓库下配置`local`的用户名和邮箱，可以在当前仓库的路径下用以下设置：

```javascript
git config --local user.name "FrontDream"

git config --local user.email qdw1995@126.com
```

这样就达到了只对某个仓库进行配置的目的。如下图所示

![gitconfig](/Git/Git的骚操作你都会嘛/gitconfig.png)

# 三、深入探索.git 文件

## HEAD 文件

![Head](/Git/Git的骚操作你都会嘛/Head.png)

如上图所示，现在 `master` 分支上，通过`cd .git`进行`git`文件，然后通过`cat`命令将 `HEAD` 文件的内容输出，然后切换到 `204-`分支，
再次进入`.git`文件，并将 `HEAD` 文件的内容输入。通过对比，我们可以发现，`HEAD` 文件存放的是当前所在分支的引用。

## Config 文件

![config](/Git/Git的骚操作你都会嘛/config.png)

如上图所示，通过在`.git`目录下，通过`cat`命令将 `congig` 文件的内容输出，我们可以看到，这个文件存储的就是我们之前配置的用户名和邮箱，我们可以通过文本编辑器打开这个文件，修改用户名和邮箱，这个修改的效果和我们用`git config` 的命令相同。

## refs 文件

![refs](/Git/Git的骚操作你都会嘛/refs.png)

还记得上面 `HEAD` 文件中存放的是`refs/heads/master`嘛？指的就是 `refs` 文件夹下的 `heads` 中的 `master`， 如上图所示，通过在`.git`目录下，通过`cd`命令进入 `refs`，可以看到有 `heads` 文件夹和 `tags` 文件夹，继续进入 `heads`，我们可以看到有很多分支名称的文件，我们通过`cat`命令输出内容，可以发现，各个分支名的文件存储的其实是 `commit` 的哈希。可以通过命令`git cat-file -t` 跟上输出内容的前面一部分查看其是什么类型，输出是`commit`类型。

回到 `refs` 进入 `tags`，发现有很多的版本号的名称，我们通过`cat`输出其中某个版本号文件的内容，同样发现，`tag` 同样也是某个 commit 的哈希值。但是通过`git cat-file -t` 跟上输出内容的前面一部分查看其是什么类型，输出是`tag`类型。继续通过`git cat-file -p`跟上哈希值(一部分就行)，发现其实他是一个`object`。不要停，继续通过`git cat-file -t` 跟上`object`后面的一部分哈希值，输出了`commit`类型。这里需要注意的是`git cat-file`后面跟`-t`是查看类型，`-p`是查看内容

结论: `heads`中存放的是各个分支名，而各个分支名其实是`commit`的哈希值，而`tags`我们也是在某个 `commit` 后打的标签，其是通过一个`tag`类型，其实是一个`object`对象，包裹着一个`commit`哈希值。

## objects 文件

![objects](/Git/Git的骚操作你都会嘛/objects.png)

首先从`.git`目录下进入`objects`目录，我们发现目录下面有很多两位数的文件夹，进入其中一个如`6b`，我们发现有很多哈希文件，通过`6b`，与哈希值进行拼接，并用`git cat-file -t` 查看类型，发现为`tree`类型（`tree`类型是`git`中重要的类型，其他类型还有`commit`，`blob`等）；用`git cat-file -p`查看内容，我们发现又是一堆哈希，继续用`-t`查看类型，`-p`查看内容，我们发现这是我们的新增文件呀，为`blob`类型。

# 四、基本用法

我们将在此部分中用提问的方式，引出每一条命令。

### Q1: 如何查看工作区、暂存区的状态？

```javascript
git status
```

命令的输出十分详细，但其用语有些繁琐。 `Git` 有一个选项可以帮你缩短状态命令的输出，这样可以以简洁的方式查看更改。 如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种格式更为紧凑的输出。

```javascript
git status -s
M README
MM Rakefile
A lib/git.rb
M lib/simplegit.rb
?? LICENSE.txt
```

新添加的未跟踪文件前面有 `??` 标记，新添加到暂存区中的文件前面有`A` 标记，修改过的文件前面有 `M` 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。例如，上面的状态报告显示： `README` 文件在工作区已修改但尚未暂存，而 `lib/simplegit.rb` 文件已修改且已暂存。 `Rakefile` 文件已修，暂存后又作了修改，因此该文件的修改中既有已暂存的部分，又有未暂存的部分。

### Q2: 如何查看工作区、暂存区的修改后的差异？

```javascript
git diff
```

此比较的是工作目录中当前文件和暂存区域快照之间的差异。 也就是修改之后还没有暂存起来的变化内容。

```javascript
git diff --staged
```

这条命令将比对已暂存文件与最后一次提交的文件差异。

```javascript
git diff 分支一 分支二 -- 要比较的文件
```

此命令对两个分支的某个文件进行比较差异。

```javascript
git diff #hash1 #hash2
```

此命令对比 `commit1` 和 `commit2` 的差异。

```javascript
git diff HEAD HEAD~2
```

对比 `HEAD`（其实指向的也是一个`commit`的哈希）与 `HEAD` 的父亲的父亲（上两次 `commit`）的差异。

### Q3: 如何跳过添加到暂存区直接提交？

```javascript
git commit -a -m 'added new benchmarks'
git commit -am 'added new benchmarks'  // 简化版
```

此命令将跳过使用暂存区域，尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁琐。 Git 提供了一个跳过使用暂存区域的方式， 只要在提交的时候，给 `git commit` 加上 `-a` 选项，`Git` 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤。

### Q4: 如何将连续的多个`commit`合并成一个？

以下图为例，需要将前三个`commit`合并成一个，首先复制第三个`commit`后面的哈希值。

![merge1](/Git/Git的骚操作你都会嘛/merge1.png)

然后运行命令：

```javascript
git rebase -i #复制的哈希
```

出现如下界面：

![merge2](/Git/Git的骚操作你都会嘛/merge2.png)

将第二、第三的`pick`修改为`s`（squash 简写），如下图所示，保存按`esc`，输入`:wq!`保存退出。

![merge3](/Git/Git的骚操作你都会嘛/merge3.png)

继续出现如下界面：

![merge4](/Git/Git的骚操作你都会嘛/merge4.png)

添加一条`message`，如下图所示：

![merge5](/Git/Git的骚操作你都会嘛/merge5.png)

保存按`esc`输入`:wq!`退出。成功界面如下图所示：

![merge6](/Git/Git的骚操作你都会嘛/merge6.png)

`squash`是指将该`commit`合并到相邻的`pick`的`commit`中。

### Q5: 如何重命名或者移动文件？

重命名文件或者移动文件。如果是移动根目录下的文件，要有相对路径。

```javascript
git mv file_from file_to
```

### Q6: 如何删除指定文件？

```javascript
git rm 待删除文件
```

### Q7: 如何保存文件，当不提交到暂存区？

这个问题可以用一个场景来解释，如果在开发过程中，工作区已经有了修改内容，这时需要立马修复一个 `bug`，这时是不可能直接跳到某个分支去修改的，我们需要先提交到暂存区，但是我其实不满意与现在的修改，后面还需要再大改，我不想提交到暂存区。这时就可以通过命令：

```javascript
git stash
```

此命令将工作区的内容存放在堆栈中，当我们修改好了 `bug`，就重新用：

```javascript
git stash apply
or
git stash pop
```

恢复工作区的内容，需要注意的是，`apply`会在堆栈中保存原有的`stash`信息，而`pop`将会把`stash`中的内容清空。

### Q8: 如何查看历史提交记录？

```javascript
git log
```

我相信小孩都知道，在不传入任何参数的默认情况下，`git log` 会按时间先后顺序列出所有的提交，最近的更新排在最上面。

其中一个比较有用的选项是 `-p` 或 `--patch` ，它会显示每次提交所引入的差异（按 补丁 的格式输出）。 你也可以限制显示的日志条目数量，例如使用 `-2` 选项来只显示最近的两次提交。

```javascript
git log -p -2
```

如果我希望在一行显示需要的信息，可以进行相应的配置如：

```javascript
git log --pretty=oneline
git log --oneline //简化版
```

`oneline` 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 `short`，`full` 和 `fuller` 选项，它们展示信息的格式基本一致，但是详尽程度不一。

```javascript
git log --pretty=format:"%h - %an, %ar : %s"
```

可以定制记录的显示格式:

![format](/Git/Git的骚操作你都会嘛/format.png)

当 `oneline` 或 `format` 与另一个 `log` 选项 `--graph` 结合使用时尤其有用。 这个选项添加了一些 `ASCII` 字符串来形象地展示你的分支、合并历史。

```javascript
git log --pretty=format:"%h %s" --graph
```

限制输出长度

![limit](/Git/Git的骚操作你都会嘛/limit.png)

示例如下：

```javascript
$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:\$current_branch" into an unborn branch
```

以上是通过命令行`git log`查看版本历史信息，当然也可以通过`gitk`命令调出图形化界面，查看历史信息。在命令行中输入`gitk`，调出如下界面：

![limit](/Git/Git的骚操作你都会嘛/tablelayout.png)

### Q9: 如何修改最近的提交信息？

有时候我们提交完了才发现漏掉了几个文件没有添加，或者说上一次的提交信息写错了，我们想修改当前分支最近的 `commit` 的 `message`。 此时，可以运行带有 `--amend` 选项的提交命令来重新提交，第二次的提交会替代掉第一次的提交。

```javascript
$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```

两次提交只有一次提交信息。

### Q10: 如何修改历史的提交信息尼？

这里需要用到`rebase`了。如下图，我们想修改历史的提交信息“ant4.0 升级”为“升级 ant4.0”。

![modifyHistoryMessage1](/Git/Git的骚操作你都会嘛/modifyHistoryMessage1.png)

首先需要找到需要修改的提交信息的上一个（父级）的哈希值，记住是**需要修改的上一次提交的哈希值**，并复制，重要的事情说三遍！

然后通过命令：

```javascript
git rebase -i #你复制的哈希值
```

然后将出现如下界面：

![modify](/Git/Git的骚操作你都会嘛/modify.png)

如下图所示，修改你需要修改的提交信息前面的`pick`为`r`（reward 的简写），保存，然后点击一下`esc`，输入`:wq!`回车退出。

![modifyHistoryMessage2](/Git/Git的骚操作你都会嘛/modifyHistoryMessage2.png)

接着出现如下界面，供你修改提交信息。

![modify2](/Git/Git的骚操作你都会嘛/modify2.png)

编辑修改，并保存，在英文输入法下点击一下`esc`，输入`:wq!`回车退出。出现如下界面，即成功修改了历史的提交信息。

![modifyHistoryMessage3](/Git/Git的骚操作你都会嘛/modifyHistoryMessage3.png)

### Q11: 如何取消暂存中的文件？

可以通过如下命令实现取消暂存中的文件：

```javascript
git reset HEAD <file>
```

### Q12: 如何取消工作区中的文件？

如果我们现在正在工作区中工作，发现现在的写法还不如已经提交的写法，想把还没添加到暂存区的文件取消修改，可以通过如下命令：

```javascript
git checkout -- <file>
```

### Q13: 如何回退到某个 commit？

有时候我们提交了一些改动，后来又不想要了。有可能是`WIP`提交，也可能是某个引入了 `bug` 的提交。这种情况，我们可以执行`git reset`。`git reset`会丢弃当前所有暂存的文件，并让我们决定 HEAD 应该指向哪里。

```javascript
git reset --soft #哈希
```

`soft reset` 将`HEAD` 移动到指定的提交（或者相对于`HEAD` 的位置索引），同时不会丢弃这些提交带来的改动。执行`git status`，你会看到我们依然能够查看之前提交所做的改动。这很有用，因为这样我们就能继续修改文件内容，后续再次提交了。

```javascript
git reset --hard #哈希
```

有时候，我们不想保留某些提交带来的改动。跟 `soft reset` 不一样，我们不再需要访问这些变动了。`Git` 应该简单地重置到指定的提交，并且会重置工作区和暂存区的文件。

### Q13: 如何删除不需要的分支？

```javascript
git branch -d you-branch
```

### Q14: 如何查看分支？

```javascript
git branch -v
or
git branch -av
```

`-v`表示的是查看本地有哪些分支，而`-av`查看的是本地和远程的分支。

还有一种情况是为了查看设置的所有跟踪分支可以用`-vv`。将所有的本地分支列出来并且包含更多的信息，如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有。

```javascript
git branch -vv
```

### Q15: 如何查看哪些分支已经合并到当前分支？

```javascript
git branch --merged
```

```javascript
git branch --no-merged
```

`--merged`查看有哪些分支已经合并到当前分支，而`--no-merged`查看所有包含未合并工作的分支，因为它包含了还未合并的工作，尝试使用 `git branch -d` 命令删除它时会失败（可以使用 `-D` 选项强制删除它）。

### Q16: 如何跟远程分支关联？

如果远程已经有了`feature-branch`，通过`git fetch`拉到本地，并通过以下命令在本地新建了`feature-branch`，并同远程分支关联。

```javascript
git checkout -b feature-branch origin/feature-branch
```

### Q17: 如何跟将本地代码推送到远程的某个分支？

```javascript
git push origin local-branch:feature-branch
```

推送本地的 `local-branch`(冒号前面的)分支到远程 `origin` 的 `feature-branch`(冒号后面的)分支(没有会自动创建)

下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程分支 `origin/feature-branch`，指向服务器的 `feature-branch` 分支的引用。本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 `feature-branch` 分支，只有一个不可以修改的 `origin/feature-branch` 指针。

可以运行 **git merge origin/feature-branch** 将这些工作合并到当前所在的分支。

如果想要在自己的 `my_branch` 分支上工作，可以将其建立在远程跟踪分支之上：

```javascript
git checkout -b my_branch origin/feature-branch
```

这样就新开了一个本地分支 `my_branch` 用户跟踪远程的 `feature-branch`。看起来是挺复杂的，但是可以简化：

```javascript
git checkout --track origin/feature-branch
```

这样的本地的 `feature-branch` 分支就可以跟踪远程的 `feature-branch` 分支了。还可以继续简化：

```javascript
git checkout feature-branch
```

当然简化的化就无法重命名了，如果需要重命名还是得使用：

```javascript
git checkout -b my_branch origin/feature-branch
```

### Q18: 如何获取某个分支的某次提交内容？

当活动分支需要某个分支的某个提交包含的改动时，我们可以用`cherry-pick`命令。通过`cherry-pick`某个提交，在当前活动分支上会创建一个新提交，包含了前者带来的改动。

如下图所示（盗来的），假设 `dev` 分支上的提交`76d12`改动了`index.js`文件，我们在`master`分支上也需要。我们不需要整个分支上的改动，只要这个提交。

```javascript
git cherry-pick 76d12
```

![chery-pick](/Git/Git的骚操作你都会嘛/chery-pick.gif)

### Q19: pull 与 fetch 有什么区别？

用 `git fetch` 把这些改动获取到本地。这不会影响本地分支，`fetch`只是下载数据。`git pull`实际上是两个命令合而为一：`git fetch`和`git merge`。当我们从 `origin` 拉取改动时，先是像`git fetch`一样获取所有数据，然后最新改动会自动合并到本地分支。

### Q20: 如何变基？

![basic-rebase-1](/Git/Git的骚操作你都会嘛/basic-rebase-1.png)

如上图所示，我们从`C2`拉出了特性分支`experiment`并进行了开发到`C4`，同时`master`继续开发到`C3`，现在我们需要将`C3`，与`C4`进行合并，通过`git merge`是其中一种策略：

```javascript
git checkout master

git merge experiment
```

![basic-rebase-2](/Git/Git的骚操作你都会嘛/basic-rebase-2.png)

另外一种策略就是通过变基：

```javascript
git checkout experiment

git rebase master
```

![basic-rebase-3](/Git/Git的骚操作你都会嘛/basic-rebase-3.png)

```javascript
git checkout master

git merge experiment
```

![limit](/Git/Git的骚操作你都会嘛/basic-rebase-4.png)

这两种整合方法的最终结果都是将`C3`和`C4`进行合并到主分支，结果没有任何区别，主要是历史记录的区别，`rebase`是一种直线型的，提交历史非常清晰整洁，而`merge`相对来说分支比较复杂。

尽管变基会使得我们的提交历史变得更加简洁，但是变基是有风险的，但是当`rebase`出现冲突时，处理过程比较麻烦，同时当对已经`push`到远端，同事也基于你的`push`进行开发，然后你又对之前的`push`执行变基操作，就会出问题，本文开始的故事就是真实的案例。总的原则是，**只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作**。

# GitHub

GitHub 搜索，如何才能搜出匹配度高，stars 数多的项目呢？可以试试下面这个方式：

```javascript
关键字一 关键字二 in:readme stars:>1000
```

![search](/Git/Git的骚操作你都会嘛/search1.png)

然后我们在点击下面的`repositories`或者`code`进一步的寻找符合的项目。

![search](/Git/Git的骚操作你都会嘛/search.png)

我们可以点击下面的`Advanced search`做到更加高级的搜索。

# 总结

`git`操作总的来说并不是很难，难点在于对命令的理解和记住，好好掌握，让`git`成为我们的利器而不是我们的噩梦！

![](https://github.com/FrontDream/FrontDream.github.io/blob/master/assets/image/personal/qrcode.png?raw=true)

❤️ 爱心三连击

1.看到这里了就点个在看支持下吧，你的「在看」是我创作的动力。

2.关注公众号前端梦想家，「一起学前端」！

3.添加微信【qdw1370336125】，拉你进技术交流群一起学习。
