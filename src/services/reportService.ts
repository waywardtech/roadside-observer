import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export const exportEntryPdf = async (entry) => {
  const html = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 24px;">
        <h1>Roadside Observer Entry</h1>
        <p><strong>Plate:</strong> ${entry.plate || ''}</p>
        <p><strong>Sticker:</strong> ${entry.sticker || ''}</p>
        <p><strong>Subject:</strong> ${entry.subject || ''}</p>
        <p><strong>Meaning:</strong> ${entry.meaning || ''}</p>
        <p><strong>History:</strong> ${entry.history || ''}</p>
        <p><strong>Notes:</strong> ${entry.note || ''}</p>
      </body>
    </html>
  `;

  const file = await Print.printToFileAsync({ html });
  const available = await Sharing.isAvailableAsync();
  if (available) {
    await Sharing.shareAsync(file.uri);
  }
  return file.uri;
};
