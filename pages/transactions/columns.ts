import { h } from 'vue'

export const columns: any = [
    {
        accessorKey: 'email',
        header: () => h('div', { class: 'text-left' }, 'Email'),
        cell: ({ row }: any) => {
            const email = row.getValue('email')

            return h('div', { class: 'text-left font-medium' }, email)
        }
    }, {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }: any) => {
            const status = row.getValue('status')

            return h('div', { class: 'text-left font-medium' }, status)
        }
    }, {
        accessorKey: 'amount',
        header: () => h('div', { class: 'text-left' }, 'Amount'),
        cell: ({ row }: any) => {
            const amount = Number.parseFloat(row.getValue('amount'))

            return h('div', { class: 'text-left font-medium' }, '$' + amount)
        }
    }, {
        accessorKey: 'id',
        header: () => h('div', { class: 'text-left' }, 'ID'),
        cell: ({ row }: any) => {
            const id = row.getValue('id')

            return h('div', { class: 'text-left font-medium' }, id)
        }
    },
]