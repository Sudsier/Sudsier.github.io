document.write("<!--导航条-->");
document.write("  <div class=\"id_name2\">");
document.write("    <div id=\"mySidenav\" class=\"sidenav\">");
document.write("      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;<\/a>");
document.write("      <a href=\"\/\">首页<\/a>");
document.write("      <a href=\"\/doc\">文档<\/a>");
document.write("      <a href=\"\/music\">音乐<\/a>");
document.write("      <a href=\"#\">#<\/a>");
document.write("    <\/div>");
document.write("    <div style=\"background-color:#202020;height:64px;\">");
document.write("      <span style=\"font-size:30px;color:#4CAF50;position:relative;left:18px;top:11px;cursor:pointer\" onclick=\"openNav()\">&#9776;<\/span>");
document.write("      <a href=\"\/\"><img src=\"https:\/\/sudsier.gitee.io\/webimg\/icon.png\" width=\"200px\" style=\"position:absolute;left:92px;top:10px\"><\/a>");
document.write("    <\/div>");
document.write("  <\/div>");
document.write("  <div class=\"id_name\">");
document.write("    <div style=\"background-color:#202020;text-align:center\">");
document.write("    <img src=\"https:\/\/s1.ax1x.com\/2020\/06\/25\/NDiHYD.md.png\" width=\"200px\" ><\/div>");
document.write("    <div class=\"topnav\">");
document.write("      <a class=\"active\" href=\"\/\">首页<\/a>");
document.write("      <a href=\"\/doc\">文档<\/a>");
document.write("      <a href=\"\/music\">音乐<\/a>");
document.write("      <a href=\"#about\">#<\/a>");
document.write("    <\/div>");
document.write("<\/div>");
/* 将侧导航的宽度设置为250px，页面内容的左边距设置为250px，并在正文中添加黑色背景色 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
/* 将侧导航的宽度设置为0，将页面内容的左边距设置为0，将正文的背景色设置为白色 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
