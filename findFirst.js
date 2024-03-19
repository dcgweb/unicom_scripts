function findFirst(tag, text = false) {
    var elements = document.querySelectorAll(tag);

    for (var i = 0; i < elements.length; i++) {
		if(text == false){ return elements[i]; }
		if (elements[i].innerHTML === text) {
			return elements[i];
		}
	}
    return false;
}
