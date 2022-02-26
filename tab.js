// for (let i = 0; i < $('.tab-button').length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//         openTab(i);
     
//     });
// }

$('.list').click(function(e){
    openTab(e.target.dataset.id);
   
})
//html에 data-id 로 id 부여 후 dataset.id로 데이터 아이디 사용가능 
function openTab(num){
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");
    $(".tab-button").eq(num).addClass("active");
    $(".tab-content").eq(num).addClass("show");   
}