export const defaults = {
    autoWidth: false,
    buttons: {
        buttons: [{
            extend: 'copyHtml5'
        }, {
            extend: 'excelHtml5'
        }, {
            extend: 'pdfHtml5'
        }, {
            extend: 'print'
        }, {
            extend: 'selectAll'
        }, {
            extend: 'selectNone'
        }, {
            extend: 'copyHtml5',
            split: [
                'excelHtml5',
                'pdfHtml5',
                'print',
                'selectAll',
                'selectNone'
            ]
        }]
    },
    colReorder: true,
    columnDefs: [{
        searchPanes: {
            show: true
        },
        targets: '_all'
    }],
    fixedColumns: {
        left: 3
    },
    fixedHeader: true,
    layout: {
        top1: 'buttons',
        top2: 'searchPanes',
        top3: 'searchBuilder'
    },
    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
    ordering: true,
    pageLength: 10,
    processing: true,
    scrollX: true,
    searching: true,
    searchPanes: {
        cascadePanes: true,
        dtOpts: {
            select: {
                style: 'multi'
            }
        },
        viewTotal: true
    },
    select: {
        style: 'multi'
    },
}