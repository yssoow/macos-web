进口 类型 { HtmlTagDescriptor,插件 } 从……起 '邀请';

出口 功能 预取()：插件{
  返回 {
    姓名:'预取',

    实施:'发布',
    申请:'生成',

    transformIndexHtml:(upujh
                        )=>{
      Const 标签=对象。键(CTX.捆).地图(
        (chunkName)=>
          ({
            injectTo:'头',
            标签:'链接',
            attrs:{
              rel:'预取',
              href:`/${chunkName}`,
            },
          } 作为HtmlTagDescriptor),
      );

      返回 {
        超文本标记语言,
        标签,
      };
    },
  };
}
