SPAテンプレートでは、内部的にMicrosoft.AspNetCore.SpaProxyと呼ばれるプロキシライブラリを利用している。
開発環境では、JavaScriptアプリはNode.js上で動作する開発サーバー経由で配信される。SpaProxyは、クライアントからのリクエストを受け付けると、
Reatアプリへのリクエストは開発サーバーにASP.NET CoreへのリクエストはKestrelへと、それぞれ振り分けるわけです。
SpaProxyが、Web API、Reactアプリへのリクエストを振り分け

index.htmlがアクセスの基点です。あらかじめ用意されている<div id="root">要素に対して、Reactアプリが埋め込まれる、とだけ理解しておきましょう

# HubFootball
# HubFootball
