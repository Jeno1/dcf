
/*
require("./huncestdata.js");
require("./huncitydata.js");

*/

global.reply_template={microservice:{version:"1.3", build:"20230728122813Z", user:"Guest", authorized:true}, answer:{}};

function handleKhkRequest(request, reply) {

    let params = {};
  
    let $reply=reply_template;
    $reply.microservice.user="Guest";
    $reply.microservice.authorized=true;

    return $reply;
}  

exports.handler = async function (event, context) {

    var request={};
    var reply={};

    reply=handleKhkRequest(request, reply);

    return {
      statusCode: 200,
      body: reply,
    };

  };