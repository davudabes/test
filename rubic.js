<script>
    // describe widget configuration and saving to a global variable for future use
    var configuration = {
        from: 'ETH',
        to: 'RBC',
        fromChain: 'ETH',
        toChain: 'ETH',
        amount: 1,
        iframe: 'flex',
        hideSelectionFrom: false,
        hideSelectionTo: true,
        theme: 'dark',
        background: '#28372e'
    }

    // prevent accidental changes to the object, for example, when re-creating a widget for another theme
    Object.freeze(configuration);

    // create widget
    rubicWidget.init(configuration);
</script>
