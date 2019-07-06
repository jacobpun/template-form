export interface UserSettings {
    name: string,
    specialOffers: boolean,
    uiStyle: string,
    subscriptionType: string,
    notes: string,
    student: string,
    startDate: Date,
    address: Address,
}

export interface Address {
    line1?: string,
    line2?: string,
    city?: string
}