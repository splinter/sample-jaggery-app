var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'view-contacts',
            context: data
        }],
        header: [{
            partial: 'header',
            context: { title: 'View all Contacts'}
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};