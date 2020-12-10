function getPost() {
  let promise = new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: "https://jsonplaceholder.ir/posts",
      success: function (response) {
        // console.log(response)
        var post_data = response;
        // console.log(post_data)
        resolve(post_data);
      },
      fail: function () {
        reject("page post has error")
      },
    });
  });
  return promise;
};

function getUser() {
  let promise2 = new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: "https://jsonplaceholder.ir/users",
      success: function (response) {
      user_data = response;
       resolve(user_data)
      },
      fail: function () {
        reject("page user has error")
      },
    });
  });
  return promise2;
};

function getComment() {
  let promise3 = new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: "https://jsonplaceholder.ir/comments",
      success: function (response) {
        var comment_data = response;
        resolve(comment_data)
      },
      fail: function () {
        reject("page comment has error")
      },
    });
  });
  return promise3
};

function main() {
  $('#loader').show();
  getPost().then((post_data) => {
    getUser().then((user_data) => {

      getComment().then((comment_data) => {
        console.log(post_data,comment_data,user_data)
        $('#loader').hide()
          for (post of post_data) {
            postTitle = post.title;
            postBody = post.body;
            for (user of user_data){
                // console.log(post.userID)
                if (user.id ==  post.userId){
                  userName= user.name;
                  userAvatar= user.avatar;
                }
            }
            for (comment of comment_data ) {
              if (comment.postId == post.id) {
                commentBody=comment.body;
                commentName=comment.name;
              }
            }
            make_post(postTitle,postBody,userName,userAvatar,commentBody,commentName)
          }





      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    })
  }).catch((err) => {
    console.log(err)
  });
}
main();

function make_post(postTitle,postBody,userName,userAvatar,commentBody,commentName){
  $("#post").append(
    `<br><div class="col-4 border border-dark"><img id="avatar" class="img-thumbnail" src="${userAvatar}" alt="user image" style="height:80px; width:80px;">
        <div id="user" class="text-info col-6">نام نویسنده:${userName}</div></div>
        <div id="header" class="text-danger">عنوان:${postTitle}</div>
        <div id="body" class="">متن:\n${postBody}</div>
        <div class="border border-dark">
        <div id="comments" class="text-danger">نویسنده دیدگاه:${commentName}</div>
        <div id="comments">دیدگاه:\n${commentBody}</div><br></div><br><hr>
    `)
}



// for (post of post_data) {
//   $("#header").html(post.title);
//   $("#body").html(post.body);
//   for (user of user_data){
//       // console.log(post.userID)
//       if (user.id ==  post.userId){
//         $("#user").html(user.name);
//         avatar.setAttribute("src",user.avatar);
//       }
//   }
//   for (comment of comment_data ) {
//     if (comment.postId == post.id) {
//       $("#comments").html(comment.body,comment.name);
//     }
//   }
// }