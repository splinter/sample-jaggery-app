var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'list-contacts',
            context: data
        }],
        header: [{
            partial: 'header',
            context: data
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};