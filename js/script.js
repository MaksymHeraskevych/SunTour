var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
function main() {
	var articlesNodes = asArr(document.querySelectorAll('.hid .tblock'))
	var nextNode = document.querySelector('.bef')
	var prevNode = document.querySelector('.aft')

	var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]

	setActiveArticle(articlesNodes, currentlyActiveArticle)

	nextNode.addEventListener('click', function (event) {
    event.preventDefault()
		var nextArticle = getNextArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, nextArticle)
    currentlyActiveArticle = nextArticle
	})

	prevNode.addEventListener('click', function (event) {
    event.preventDefault()
		var prevArticle = getPrevArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, prevArticle)
    currentlyActiveArticle = prevArticle
	})
}