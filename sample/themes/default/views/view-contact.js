
var render = function(theme, data) {
    theme('singlecol', {
        body: [{
            partial: 'view-contact',
            context: data
        }],
        header: [{
            partial: 'header',
            context: {title:'View Contact'}
        }],
        footer: [{
            partial: 'footer',
            context: data
        }]
    })
};