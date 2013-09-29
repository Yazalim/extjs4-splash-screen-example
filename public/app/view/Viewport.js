var me = this;

Ext.define('Splash.view.Viewport', {
    extend: 'Ext.container.Viewport',
    listeners: {
        afterrender: function() {
            var mask = Ext.get('loading-mask'),
                parent = Ext.get('loading-parent');
            // Destroy the masks
            mask.fadeOut({callback: function(){ mask.destroy(); }});
            parent.fadeOut({callback: function(){ parent.destroy(); }});
        }
    }, // eo listeners
    
    layout: {
        type: 'border',
        align: 'stretch'
    },    
    autoScroll: true,
    minWidth: 960,
    items :  [
    	{
    		xtype: 'panel',
    		//html: 'naber',
    		region: 'north',
    		border: false,
    		items: [{
    			html: '<center><img src=images/logo.png /></center>'
    		}]
    	},
        {
            xtype: 'panel',
            region: 'west',
    		items: [{
            	html: '<center><br><br>Amazing Menu</center>'
            }],
            flex: 1

        },
        {
            xtype: 'panel',
            region: 'center',
            items: [{
            	html: '<center><br><br>Amazing Content</center>'
            }],
            flex: 5
        }
    ]
});