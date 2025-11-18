const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        //wait 10ms and clear the input value
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
})

function createTags(input){
    console.log(input);
    //tags can't be an empty string and also trim any white space
    const tags = input.split(',').filter(tag => tag.trim() 
    !== '').map(tag => tag.trim());
    console.log(tags);

    //get these tags and put into html
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        //create tag element
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        //div with the id of tags
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);
    
    //stopping and pick a random tag to land on highlight
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);

        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    //get all the spans
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];

}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
