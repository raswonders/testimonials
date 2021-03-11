class Customer {
    constructor(picture, testimonial) {
        this.picture = picture
        this.testimonial = testimonial
    }
}

customers = []
customers.push(new Customer('img/customer-1.jpg', 'Ut nisi velit, placerat eu euismod id, vestibulum id neque. Fusce mauris dolor, pharetra dictum laoreet ultricies, ornare vitae elit.'))
customers.push(new Customer('img/customer-2.jpg', 'Fusce aliquam nibh vitae facilisis suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut quam ante. Nulla vitae nisl lobortis arcu porta condimentum. Nam sodales, metus vitae pharetra luctus, lectus lorem dignissim eros, vel.'))
customers.push(new Customer('img/customer-3.jpg', 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu ante nec felis lobortis convallis. Sed consequat augue ut elit blandit, a auctor arcu aliquet. Aliquam interdum lacus justo, eget eleifend lacus vulputate.'))

const p = document.getElementById("testimonial");
const ellipsis = document.getElementById("pictureEllipse");
let cu_index = 0

function displayTestimonial() {
    cu = customers[cu_index]
    ellipsis.style.backgroundImage = `url(${cu.picture})`;
    p.innerHTML = cu.testimonial;
}

function indexChange(step) {
    i = cu_index;
    i += step
    i = i % customers.length;
    if (i < 0) i += customers.length
    cu_index = i;
}