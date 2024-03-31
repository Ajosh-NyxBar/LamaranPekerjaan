function showContent(content) {
    var contents = ['home', 'jobs', 'achievements', 'contact'];
    contents.forEach(function(item) {
        var element = document.getElementById(item + 'Content');
        if (content === item) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}
