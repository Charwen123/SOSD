window.onload = function() {
    // 获取上传文件按钮
    var btnUpload = document.querySelector('#btnUpload');
    // 为按钮绑定单击事件处理函数
    btnUpload.addEventListener('click', function() {

        // 获取用户选择的文件列表
        var input_files = document.querySelector('.input-file')
        var files = input_files.files
        var fileName = document.querySelector('a')
        if (files.length <= 0) {
            alert('请选择要上传的文件！')
        }
        console.log('用户已选择待上传的文件');

        var fd = new FormData()
        fd.append('file', files[0])

        // 循环显示文件名
        fileName.innerHTML = " "
        for (var i = 0; i < files.length; i++) {
            file = files[i]
            console.log(file.name);
            fileName.innerHTML += file.name + '<br>'
        }

        // 创建xhr对象
        var xhr = new XMLHttpRequest()

        // 监听文件上传进度
        xhr.upload.onprogress = function(e) {
            // e.lengthComputable是一个布尔值 表示当前上传的长度是否具有可计算的长度
            if (e.lengthComputable) {
                // 显示进度条
                document.querySelector('.progress').style.opacity = 100

                // e.loaded：已传输的字节 
                // e.total：总传输的字节
                // Math.ceil((e.loaded/total) * 100) 已传输的字节/总传输的字节*100获得百分比再由Math.ceil()取整
                var procentComplete = Math.ceil((e.loaded / e.total) * 100)

                // 计算进度条的百分比 修改进度条的html
                var bar = document.querySelector('.progress-bar')

                bar.style.width = procentComplete + '%'
                bar.innerHTML = procentComplete + '%'

            }
        }

        // 调用open函数 指定类型与URL地址
        xhr.open('POST', '\\')

        // 发起请求
        xhr.send(fd)

        // 监听onreadystatechange事件
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText)
                console.log(data);

            }
        }
    })
}