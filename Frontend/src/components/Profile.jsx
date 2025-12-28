import React from "react";
import { User, Mail, MapPin, Package, CreditCard, Settings, Edit, LogOut } from "lucide-react";

const Profile = () => {
    // Mock User Data
    const user = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        role: "Premium Member",
        location: "New York, USA",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        joinDate: "Member since Dec 2023",
        stats: {
            orders: 24,
            wishlist: 12,
            reviews: 8
        }
    };

    const sections = [
        {
            title: "Account Settings",
            items: [
                { icon: User, label: "Personal Information", desc: "Update your profile details" },
                { icon: MapPin, label: "Addresses", desc: "Manage delivery addresses" },
                { icon: Settings, label: "Preferences", desc: "Notification and privacy settings" }
            ]
        },
        {
            title: "Orders & Billing",
            items: [
                { icon: Package, label: "My Orders", desc: "Track and view order history" },
                { icon: CreditCard, label: "Payment Methods", desc: "Manage credit cards and banking" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                    <div className="h-32 bg-gradient-to-r from-indigo-500 to-rose-500"></div>
                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="relative">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                <button className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                                    <Edit className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex space-x-3 mb-2">
                                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm">
                                    Edit Profile
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-lg hover:from-indigo-700 hover:to-rose-700 font-medium transition-all shadow-md">
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                            <div className="flex items-center space-x-4 mt-2 text-gray-600">
                                <div className="flex items-center space-x-1">
                                    <Mail className="w-4 h-4" />
                                    <span>{user.email}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{user.location}</span>
                                </div>
                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100">
                                    {user.role}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(user.stats).map(([key, value]) => (
                        <div key={key} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{key}</div>
                            <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
                        </div>
                    ))}
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 px-1">{section.title}</h3>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                                {section.items.map((item, itemIdx) => (
                                    <button key={itemIdx} className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors text-left group">
                                        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600 group-hover:text-indigo-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <div className="font-semibold text-gray-900">{item.label}</div>
                                            <div className="text-sm text-gray-500">{item.desc}</div>
                                        </div>
                                        <div className="text-gray-300 group-hover:text-indigo-500 transition-colors">→</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logout Button */}
                <div className="flex justify-center pt-8">
                    <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;