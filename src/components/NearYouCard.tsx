export default function NearYouCard() {
    return(
<div className="w-full max-w-md p-4 rounded-lg shadow-lg mr-auto sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-2 mx-6">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Connoisseur Near me</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-md" src="/pictures/target-logo.svg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Coles
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Mindarie
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        69Km
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-md" src="/pictures/target-logo.svg" alt="Bonnie image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Woolworths
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            MirraBBooka
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5Km
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-md" src="/pictures/target-logo.svg" alt="Michael image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            BP
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Clarkson
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        500m
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-md" src="/pictures/target-logo.svg" alt="Lana image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Foodary
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Perth
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        20Km
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-md" src="/pictures/target-logo.svg" alt="Thomas image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Foot Locker
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Kalgoolie
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5cm
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
    )
}