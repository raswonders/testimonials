(function() {
    class Customer {
        constructor(picture, testimonial) {
            this.picture = picture
            this.testimonial = testimonial
        }
    }

    const ellipsis = document.getElementById("pictureEllipse");
    const p = document.getElementById("testimonial");
    let index = 0
    const customers = []
    customers.push(new Customer('img/customer-1.jpg', 'Ut nisi velit, placerat eu euismod id, vestibulum id neque. Fusce mauris dolor, pharetra dictum laoreet ultricies, ornare vitae elit.'))
    customers.push(new Customer('img/customer-2.jpg', 'Fusce aliquam nibh vitae facilisis suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut quam ante. Nulla vitae nisl lobortis arcu porta condimentum. Nam sodales, metus vitae pharetra luctus, lectus lorem dignissim eros, vel.'))
    customers.push(new Customer('img/customer-3.jpg', 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu ante nec felis lobortis convallis. Sed consequat augue ut elit blandit, a auctor arcu aliquet. Aliquam interdum lacus justo, eget eleifend lacus vulputate.'))

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            // left button
            if (e.target.classList.contains('btn-left') ||
                e.target.id === 'use-left') {
                index--
            // right button
            } else if (e.target.classList.contains('btn-right') ||
                e.target.id === 'use-right') {
                index++
            }

            // If index overflows handle it
            if ( index < 0 ) {
                index = customers.length - 1
            } else if ( index > customers.length ) {
                index = 0
            }

            // update page
            displayTestimonial(index)
        })
    })

    function displayTestimonial(index) {
        console.log(index)
        let cu = customers[index]
        ellipsis.style.backgroundImage = `url(${cu.picture})`;
        p.innerHTML = cu.testimonial;
    }

    displayTestimonial(index)
})()