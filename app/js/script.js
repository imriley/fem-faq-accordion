document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        let accCollapse = item.nextElementSibling;
        if (!item.classList.contains('collapsing')) {
            
            if (!item.classList.contains('open')) {
                hideAll();
                accCollapse.style.display = 'block';
                let accHeight = accCollapse.clientHeight;
                setTimeout(() => {
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 1);
                accCollapse.classList = 'accordion__collapse collapsing';

                setTimeout(() => {
                    accCollapse.classList = 'accordion__collapse collapse open';
                }, 300);
            }
            else {
                accCollapse.classList = 'accordion__collapse collapsing';
                setTimeout(() => {
                    accCollapse.style.height = '0px';
                }, 1);

                setTimeout(() => {
                    accCollapse.classList = 'accordion__collapse collapse';
                    accCollapse.style.height = '';
                }, 300);
            }
            item.classList.toggle('open');
        }
    });
});

let ques = document.querySelectorAll('.accordion__question');

function hideAll() {
    for (i = 0; i < ques.length; i++) {
        if (ques[i].classList.contains('open')) {
            active = ques[i].nextElementSibling;
            active.classList = 'accordion__collapse collapsing';
            setTimeout(() => {
                active.style.height = '0px';
            }, 1);
            setTimeout(() => {
                active.classList = 'accordion__collapse collapse';
                active.style.height = '';
            }, 300);
            ques[i].classList.toggle("open", false);
        }
    }
}