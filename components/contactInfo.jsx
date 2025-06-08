import PhoneIcon from '@mui/icons-material/Phone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ContactInfo() {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-stretch gap-6 mx-4 md:mx-8 lg:mx-16 my-8 md:my-12">
            {/* Contact Details */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        İletişim Bilgileri
                    </h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <PhoneIcon className="text-blue-600 mt-1 text-xl md:text-2xl flex-shrink-0" />
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                                Telefon
                            </h4>
                            <p className="text-gray-600 text-sm md:text-base">
                                +90 224 XXX XX XX
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <LocationPinIcon className="text-red-600 mt-1 text-xl md:text-2xl flex-shrink-0" />
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                                Adres
                            </h4>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Kyokushin Karate Academy Emba Fit Spor Kulübü Bursa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Working Hours */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center justify-center space-x-2">
                        <AccessTimeIcon className="text-green-600 text-xl md:text-2xl" />
                        <span>Çalışma Saatleri</span>
                    </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm md:text-base">
                            Pazartesi - Cuma
                        </span>
                        <span className="text-gray-600 text-sm md:text-base">
                            10:00 - 22:00
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm md:text-base">
                            Cumartesi
                        </span>
                        <span className="text-gray-600 text-sm md:text-base">
                            10:00 - 20:00
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-800 text-sm md:text-base">
                            Pazar
                        </span>
                        <span className="text-red-500 text-sm md:text-base">
                            Kapalı
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}