function checkObjProp(userInfo, prop) {
  if (userInfo == null || typeof userInfo === 'undefined' || userInfo[prop] == null || typeof userInfo[prop] === 'undefined') {
    return false;
  }
  else return true;
}

let initChatopera = function() {
  var scpt = document.createElement("script");
//  scpt.type = "text/javascript";
  scpt.src = "https://livezilla.lutube.org:8043/im/0n51w4.html";
  scpt.defer = true;
//  var ref = document.getElementsByTagName( 'script' )[ 0 ];
//  ref.parentNode.insertBefore(scpt, ref);
  document.head.appendChild(scpt);
  console.log("script added:", scpt);
};

let initUserInfo = function(user, company) {
  let userInfo = { name: user, company };
  console.log("userInfo: ", userInfo);
  window.userInfo = userInfo;
};


//let user = 'usr1';
//let company = 'company1';
//let res = {overwrite:true,111:`${user}@${company}`, 113:company, language:'zh-cn'};
//var lz_data = res;
//initChatopera();
//let res = {overwrite:true, language:'zh-cn'};
//window.lz_data = res;

function zendeskInit(userInfo) {
  console.log(`in zendeskInit, param: [${userInfo}].`);
  if (!checkObjProp(userInfo, 'username')) {
    console.log(`userInfo not defined, zendesk not available`);
  }
  else {
   const { username, company } = userInfo;
   let useremail = `${username}@${company}.0xf0.cc`;
   console.log(`using identity ${username}:${company}(${useremail}) ...`);
   initUserInfo(username, company);
   initChatopera();
  }
}

