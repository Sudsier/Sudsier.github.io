document.write("<div>");
document.write("    <div class=\"footer_1\">");
document.write("      <div style=\"font-size:30px;color:#fafafa\">Sudsier<\/div>");
document.write("      <hr style=\"background-color:#fafafa;height:1px;border:none;\">");
document.write("      <a rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-nc-nd\/4.0\/\"><img alt=\"Knowledge sharing license agreement\" style=\"border-width:0\" src=\"https:\/\/licensebuttons.net\/l\/by-nc-nd\/4.0\/80x15.png\" \/><\/a>Unless otherwise stated, the content of this website adopts<span rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-nc-nd\/4.0\/\" style=\"color:#b1b1b1;\">CC BY-NC-ND 4.0 CC international license agreement<\/span>to grant authorization.");
document.write("    <\/div>");
document.write("    <div class=\"footer_2\">Copyright © 2020-<span id=\"copyright\"><\/span> Sudsier All rights reserved.<br>Sudsier information group is responsible for maintaining this website.<\/div>");
document.write("<\/div>");
//版权年份
var d = new Date();
document.getElementById("copyright").innerHTML = d.getFullYear();