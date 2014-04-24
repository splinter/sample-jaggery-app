var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'edit-contact',
            context: data
        }],
        header: [{
            partial: 'header',
            context: { title:'Edit Contact'}
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};