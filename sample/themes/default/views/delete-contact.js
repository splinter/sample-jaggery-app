var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'delete-contact',
            context: data
        }],
        header: [{
            partial: 'header',
            context: {title:'Delete a Contact'}
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};