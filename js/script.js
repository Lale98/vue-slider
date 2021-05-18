var app = new Vue (
    {
        el: '#root',
        data: {
            images: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
            imagesIndex: 0
        },
        methods: {
            next: function () {
                this.imagesIndex++;
                console.log(this.imagesIndex);
                if (this.imagesIndex == this.images.length) {
                    this.imagesIndex = 0;
                }
            },
            prev: function() {
                this.imagesIndex--;
                if (this.imagesIndex == -1) {
                    this.imagesIndex = this.images.length - 1;
                }
            }
           
        },
        created: function() {
            var self = this;
            setInterval(function() {
                self.imagesIndex++;
                if (self.imagesIndex == self.images.length) {
                    self.imagesIndex = 0;
                };
            }, 3000);
        }
    }
);
