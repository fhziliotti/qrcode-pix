import qrcode from 'qrcode';
interface QrCodePixParams {
    version: string;
    key: string;
    city: string;
    name: string;
    value?: number;
    transactionId?: string;
    message?: string;
    cep?: string;
    notRepeatPayment?: boolean;
    currency?: number;
    countryCode?: string;
}
declare function QrCodePix({ version, key, city, name, value, message, cep, notRepeatPayment, transactionId, currency, countryCode, }: QrCodePixParams): {
    payload: () => string;
    base64: (options?: qrcode.QRCodeToDataURLOptions | undefined) => Promise<string>;
};
export { QrCodePixParams, QrCodePix };
