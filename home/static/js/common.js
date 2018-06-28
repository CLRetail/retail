/*
* 打开弹窗
* @param id 弹窗名字
* @author hy 2018-06-22
* */
function openPopWin (id , _area){
    int_layer_index=layer.open({
        type: 2,//frame层
        title: '',
        shade: 0.4,
        area: _area,
        anim: 5,
        resize: false,
        scrollbar: false,
        content: ['pop/' + id + '.html' , 'no'],
    });
}