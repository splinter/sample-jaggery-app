var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'add-contact',
            context: data
        }],
        header: [{
            partial: 'header',
            context:  { title: 'Add Contact'}
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};