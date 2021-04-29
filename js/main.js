var vm = new Vue({
    el: '#app',
    data() {
        return {
            like: null,
            com: false,
            likeChange: 'white',
            comment: [],
            commentBox: '',
            typing: '',
            time: '',
            shareBox: false,
            post: false,
            postTitle: '',
            postBody: '',
            allPost: [],
            eachPost: {},
            commentLike: null,
            commentChange: 'black',
            unLike: null,
            hate: 'black'
        }
    },
    methods: {
        addLike: function() {
            this.like += 1;
            this.likeChange = 'red'
            if (this.like > 1) {
                this.like = null;
                this.likeChange = 'white';
            }
        },

        addComment: function() {
            this.com = !this.com
        },

        showTyping: function() {
            this.typing = 'User is Typing.......'
        },

        showComment: function() {
            if (this.commentBox) {
                this.comment.push(this.commentBox)
                this.commentBox = '';
            }
            this.typing = null;
            this.com = !this.com;
            this.time = d.getHour()
        },

        toggleShare: function() {
            this.shareBox = !this.shareBox
        },

        shareNow: function() {
            this.shareBox = !this.shareBox
            alert("Post Has Been Shared to yout Timeline")
        },

        togglePost: function() {
            this.shareBox = !this.shareBox;
            this.post = !this.post

        },

        submitPost: function() {
            if (this.postTitle && this.postBody) {
                this.post = !this.post;
                this.eachPost.title = this.postTitle.toUpperCase();
                this.eachPost.body = this.postBody;
                this.allPost.push(this.eachPost)
            }
            this.postBody = '';
            this.postTitle = '';
        },
        addCommentLike: function() {
            this.commentLike += 1;
            this.commentChange = 'green';
        },
        disLike: function() {
            this.unLike += 1;
            this.hate = 'red';
        },

    },



})