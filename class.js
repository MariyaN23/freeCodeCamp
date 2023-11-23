class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')

firstComment instanceof Comment
//true

firstComment instanceof Object
//true

firstComment instanceof Array
//false

firstComment.upvote()
console.log(firstComment.votesQty)
//1

firstComment.upvote()
console.log(firstComment.votesQty)
//2

Comment.prototype.constructor === Comment
//true, т.к. js не ооп язык

//принадлежность св-ва конкретному экземпляру
firstComment.hasOwnProperty('text')
//true
firstComment.hasOwnProperty('votesQty')
//true
firstComment.hasOwnProperty('upvote')
//false, это метод наследуется от родительского Comment
firstComment.hasOwnProperty('hasOwnProperty')
//false, наследуется от Object

//создание еще экземпляров
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')