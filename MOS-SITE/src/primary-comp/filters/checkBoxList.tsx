type Props = { params: string[] }

export default function CheckBoxList({ params }: Props) {
    return (
        <div className="flex flex-col w-auto items-start align-middle justify-between px-5 text-white">
            {params.map((param) => (
                <div key={param} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label className="text-sm font-medium text-white">{param}</label>
                </div>
            ))}
        </div>
    )
}