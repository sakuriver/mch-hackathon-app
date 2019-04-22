// GET通信を実施する
function connectServerGetMethod(apiUrl, successCallBack, failCallBack) {
    $.ajax({  
        url:apiUrl, // 通信先のURL
        type:"GET",    // 使用するHTTPメソッド
        dataType : 'JSON',                  
        scriptCharset: 'utf-8', 
        crossDomain: true,
        timespan:1000     // 通信のタイムアウトの設定(ミリ秒)
    }).then(
        function(data, textStatus, jqXHR) {
            console.log(data);
            return successCallBack(data, textStatus, jqXHR);
        },
        function(jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR);
            return failCallBack(data, textStatus, jqXHR);
            // 7. alwaysは、成功/失敗に関わらず実行される
       }
    ).always(function(){
            
    });
    return undefined;
}

// ヒーローのトークン取得用のURLを設定
function getHeroTokenUri(tokenId) {
	return tokenUri = "https://www.mycryptoheroes.net/metadata/hero/" + tokenId;
}

// 指定したキーについて、URLに付加されている値を追加	
function getUrlParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}