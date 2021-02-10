# 微信小程序组件height高度自适应

你还在为 `scroll-view` 高度自适应问题而惆怅吗？你还在为 `swiper` 高度自适应而挠头吗？接下来，跟着我一招撸了他们！

# 简介

众所周知，`scroll-view` 和 `swiper` 是微信自带的两个非常常用的两个组件，当然也非常好用，但是好用的前提是你得先给他们设置固定的高度，我们来看看[官网](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)是怎么说的：

![课程](/微信小程序/微信小程序组件height高度自适应/scroll-view.png)

如上图所示，官网明确提出了，`scroll-view` 是需要设置固定高度的。

# 设置定高

按照官网的提示，我们来给`scroll-view`设置高度：

```wxml
<view>
  <view class="top">上</view>
  <scroll-view class="center" style="height:1100rpx" scroll-y="true">
    中
    <block wx:for="{{100}}" wx:key="*this">
      <view style="height:100rpx;border:2rpx">{{item}}</view>
    </block>
  </scroll-view>
  <view class="bottom">下</view>
</view>
```

```wxss
.top {
    height: 200rpx;
    line-height: 200rpx;
    text-align: center;
    font-size: 32rpx;
    color: white;
    background-color: lightgreen;
}

.center {
    text-align: center;
}

.bottom {
    height: 200rpx;
    line-height: 200rpx;
    text-align: center;
    font-size: 32rpx;
    color: white;
    background-color: lightsalmon;
}
```

![固定高度](/微信小程序/微信小程序组件height高度自适应/固定高度.png)

效果如下图：

![定高](/微信小程序/微信小程序组件height高度自适应/scroll.gif)

我们可以看到，我们初衷是希望上下两个固定，中间滚动，而现在是滚动到最下面，现在的效果并不是我们想要的。

这主要的原因在于我们设置了一个死的高度，这个高度超过了手机屏幕的高度，导致最下面的被挤占了。

## 获取手机高度

首先，不同的手机屏幕的尺寸不同，因此其高度不同，如果我们按照上面的写法，设置了死的高度，效果并不是我们想要的。为了解决这个问题，我们可以通过：

```javascript
//获取屏幕可用高度
let screenHeight = wx.getSystemInfoSync().windowHeight;
```

先去获取屏幕的高度，然后通过减去除去`scroll-view`的其他块的固定高度，得到`scroll-view`的高度（刚开始我就是这么做的）。

```js
Page({
  data: {
    height: 0,
  },

  onLoad: function () {
    let screenHeight = wx.getSystemInfoSync().windowHeight;

    this.setData({
      height: screenHeight - 200,
    });
  },
});
```

```html
<view>
  <view class="top">上</view>
  <scroll-view class="center" style="height:{{2*height}}rpx" scroll-y="true">
    中
    <block wx:for="{{100}}" wx:key="*this">
      <view style="height:100rpx;border:2rpx">{{item}}</view>
    </block>
  </scroll-view>
  <view class="bottom">下</view>
</view>
```

```css
.top {
  height: 200rpx;
  line-height: 200rpx;
  text-align: center;
  font-size: 32rpx;
  color: white;
  background-color: lightgreen;
}

.center {
  text-align: center;
}

.bottom {
  height: 200rpx;
  line-height: 200rpx;
  text-align: center;
  font-size: 32rpx;
  color: white;
  background-color: lightsalmon;
}
```

效果如下图所示：

![获取高度](/微信小程序/微信小程序组件height高度自适应/getHight.gif)

## Flex 布局

或许上面的方法可以实现我们想要的，但是一个自适应，居然要通过`js`，`css`一起实现，还需要手动计算，并不是我们这种追求卓越的攻城狮可以忍受的，更多的时候我们希望`scroll-view`可以自适应。

最后请出我们的大杀器`Flex`，呃呃呃，看到这里会不会有点失望，谁还不知道`flex`呀，搞得神神秘秘的，我相信，所有人都用过`flex`，但是你用过`flex`布局解决过`scroll-view`和`swiper`的高度自适应的问题吗？或者你有除了计算高度外其他更好的办法吗？没有的话就跟着我，说不定，你看完会觉得，真香啊，妈妈再也不用担心我被产品批了。`flex`布局我就不细讲了，如果不了解的，可以先去`google`学习一下。

或许，我觉得官网的*需要给 scroll-view 一个固定高度*这句话需要改成**需要给 scroll-view 设置高度**，也就是说，我们不一定是固定的高度，而是需要给一个高度，而不是固定值，哈哈，我相信很多人已经猜到了，`scroll-view`需要自适应，是不是把`hight`设置 **100%** 就好了尼，是的，恭喜你答对了一半，也就是说，我们让`scroll-view`的高度是父元素的 **100%**。但是还没完成，我们需要给`scroll-view`包裹一个`view`，这个`view`需要设置`flex:1`，让他在和上下两块中进行自适应。同时，包裹上中下的`view`，需要启动`flex`布局。这样就完成了一半了。我们先来看代码：

```html
<view class="con">
  <view class="top">上</view>
  <view class="scroll">
    <scroll-view class="center" scroll-y="true">
      中
      <block wx:for="{{100}}" wx:key="*this">
        <view style="height:100rpx;border:2rpx">{{item}}</view>
      </block>
    </scroll-view>
  </view>
  <view class="bottom">下</view>
</view>
```

```css
page {
  height: 100%;
}

.con {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top {
  height: 200rpx;
  line-height: 200rpx;
  text-align: center;
  font-size: 32rpx;
  color: white;
  background-color: lightgreen;
}

.scroll {
  flex: 1;
  overflow: scroll;
}

.center {
  text-align: center;
  height: 100%;
}

.bottom {
  height: 200rpx;
  line-height: 200rpx;
  text-align: center;
  font-size: 32rpx;
  color: white;
  background-color: lightsalmon;
}
```

效果如下图所示：

![flex](/微信小程序/微信小程序组件height高度自适应/flex.gif)

完美！这里需要千万**注意一点**，包裹的上中下的元素如果没有设置具体的高度，那么要设置一个相对高度，如上代码为`100%`，那么他的上一级也要设置高度，如果上一级没有具体的高度那么同样设置`100%`，向上追溯，如果直到`page`，都没有找到一个固定的高度，那么就把`page`设置`100%`，也就是手机的高度。

![](https://github.com/FrontDream/FrontDream.github.io/blob/master/assets/image/personal/qrcode.png?raw=true)

❤️ 爱心三连击

1.看到这里了就点个在看支持下吧，你的「在看」是我创作的动力。

2.关注公众号前端梦想家，「一起学前端」！

3.添加微信【qdw1370336125】，拉你进技术交流群一起学习。
