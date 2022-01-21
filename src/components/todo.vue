<script  type="text/JavaScript">

defineProps({
    msg: String
})


$('#f1').bind('keyup', function(event) {
if (event.keyCode == "13") {
    x = document.getElementById("f1").value;
        if (x != null) {
           console.log("x");
           }
    }
});



</script>

<template>
    <h1>{{ msg }}</h1><br>

    <form id="f0" >
        <input id="f1" type="text" name="todothing" placeholder="What needs to be done?">
    </form>
    <br>
    <div id="f3">    
        <table>
    <tr>
        <td>list</td>
    </tr>
       </table>
    </div>


</template>


<style scoped>
h1 {
    font-family:Arial, Helvetica, sans-serif;
    color: #ead7d7;
    font-size: 95px;
}
#f0 { 
    
    width: 550px;
    height: 70px;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(37, 37, 37, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.15);
    position: absolute;
    top: 50%;
    left: 36%;
    margin-top: -170px; 
    margin-left: -50px;
}
#f1{
    
    height: 70px;
    box-sizing: border-box;
    color: inherit;
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    padding: 6px;
    border: 1px solid rgb(90, 89, 89);
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
}
#f3{
    
 font-size:24px; 
 display: flex;
 align-items: center;
 justify-content: center;

}

</style>

<!-- 
    输入框的交互流程：开始-如果输入框中有数据并按了回车--把数据移入下面的表格中保存。

    表格的控制，如果表格中没有数据隐藏表格，如果有数据，显示表格。
    
    表格的功能 
    表格数据有两种状态，已经完成和未完成。

    表格周边的功能按钮，
    1，all显示表格的全部内容。
    2，active显示未完成的内容。
    3，completed显示已经完成的内容。
    4，配合全选箭头，clear completed清除所有已经完成的内容。
    5，全选箭头标记所有内容已经完成。
    6，大叉删除表格内容。

  主要功能是根据输入框中的数据及表格中的数据状态，进行视图的变更。
    

 -->