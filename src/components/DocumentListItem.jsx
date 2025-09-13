import { useRouter } from "next/navigation";
// Helper function to format date as "X days ago"
const formatDateAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
};

const getDocumentIcon = (format) => {
    const fileType = format.toUpperCase();

    // Define colors for different file types
    const getFileTypeStyles = (format) => {
        const styles = {
            'pdf': {
                bg: 'bg-red-100',
                border: 'border-red-300',
                text: 'text-red-700'
            },
            'doc': {
                bg: 'bg-blue-100',
                border: 'border-blue-300',
                text: 'text-blue-700'
            },
            'docx': {
                bg: 'bg-blue-100',
                border: 'border-blue-300',
                text: 'text-blue-700'
            },
            'xls': {
                bg: 'bg-green-100',
                border: 'border-green-300',
                text: 'text-green-700'
            },
            'xlsx': {
                bg: 'bg-green-100',
                border: 'border-green-300',
                text: 'text-green-700'
            },
            'ppt': {
                bg: 'bg-orange-100',
                border: 'border-orange-300',
                text: 'text-orange-700'
            },
            'pptx': {
                bg: 'bg-orange-100',
                border: 'border-orange-300',
                text: 'text-orange-700'
            },
            'txt': {
                bg: 'bg-gray-100',
                border: 'border-gray-300',
                text: 'text-gray-700'
            }
        };

        return styles[format.toLowerCase()] || {
            bg: 'bg-purple-100',
            border: 'border-purple-300',
            text: 'text-purple-700'
        };
    };

    const styles = getFileTypeStyles(format);

    return (
        <div className={`w-8 h-8 ${styles.bg} rounded-lg flex items-center justify-center shadow-sm border ${styles.border}`}>
            <div className="text-center">
                <div className={`text-[8px] font-bold ${styles.text} leading-tight`}>
                    {fileType}
                </div>
            </div>
        </div>
    );
};

const AvatarGroup = ({ people }) => {
    // Generate consistent pastel colors based on person name
    const getPastelColor = (name) => {
        const colors = [
            'bg-pink-200 text-pink-800',
            'bg-blue-200 text-blue-800',
            'bg-green-200 text-green-800',
            'bg-yellow-200 text-yellow-800',
            'bg-purple-200 text-purple-800',
            'bg-indigo-200 text-indigo-800',
            'bg-red-200 text-red-800',
            'bg-orange-200 text-orange-800',
            'bg-teal-200 text-teal-800',
            'bg-cyan-200 text-cyan-800'
        ];
        
        // Use name hash to get consistent color
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div className="relative group">
            <div className="flex -space-x-1">
                {people.slice(0, 3).map((person, index) => {
                    const colorClass = getPastelColor(person);
                    return (
                        <div
                            key={index}
                            className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold shadow-sm hover:scale-105 transition-transform duration-150 ${colorClass}`}
                        >
                            {person.charAt(0).toUpperCase()}
                        </div>
                    );
                })}
                {people.length > 3 && (
                    <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                        +{people.length - 3}
                    </div>
                )}
            </div>
            
            {/* Single tooltip showing all people - positioned to stay within viewport */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none min-w-max max-w-xs shadow-lg">
                <div className="space-y-1 max-h-48 overflow-y-auto">
                    {people.map((person, index) => (
                        <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                            <div className={`w-3 h-3 rounded-full border border-white flex-shrink-0 ${getPastelColor(person).split(' ')[0]}`}></div>
                            <span className="truncate">{person}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900"></div>
            </div>
        </div>
    );
};

export default function DocumentListItem({ document }) {
    const router = useRouter();

    return (
        <div className="group hover:bg-slate-50 transition-colors duration-150 px-6 py-4 cursor-pointer" onClick={()=>{
            router.push(`/summary`);
        }}>
            <div className="flex items-center w-full gap-4">
                {/* File Type Icon */}
                <div className="w-10 flex-shrink-0 flex justify-center">
                    {getDocumentIcon(document.format)}
                </div>

                {/* Document Name */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 truncate group-hover:text-slate-700">
                        {document.name}
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                        {document.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex-1 min-w-0">
                    <div className="flex gap-1.5 flex-wrap">
                        {document.tags.slice(0, 2).map((tag, index) => {
                            const tagColors = [
                                'bg-blue-50 text-blue-700 border-blue-200',
                                'bg-emerald-50 text-emerald-700 border-emerald-200',
                                'bg-amber-50 text-amber-700 border-amber-200',
                                'bg-purple-50 text-purple-700 border-purple-200',
                                'bg-rose-50 text-rose-700 border-rose-200',
                                'bg-indigo-50 text-indigo-700 border-indigo-200'
                            ];
                            const colorClass = tagColors[index % tagColors.length];
                            
                            return (
                                <span
                                    key={index}
                                    className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colorClass}`}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                        {document.tags.length > 2 && (
                            <span className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200">
                                +{document.tags.length - 2}
                            </span>
                        )}
                    </div>
                </div>

                {/* Pages Count */}
                <div className="w-16 flex-shrink-0 text-center">
                    <span className="text-sm font-medium text-slate-600">{document.totalPages} Pages </span>
                </div>

                {/* Last Updated */}
                <div className="w-20 flex-shrink-0 text-center">
                    <span className="text-sm text-slate-500">{formatDateAgo(document.analyzedOn)}</span>
                </div>

                {/* Document Type Badge */}
                <div className="w-24 flex-shrink-0 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-100">
                        {document.documentType}
                    </span>
                </div>

                {/* People Avatars */}
                <div className="w-16 flex-shrink-0 flex justify-center">
                    <AvatarGroup people={document.people} />
                </div>
            </div>
        </div>
    );
}