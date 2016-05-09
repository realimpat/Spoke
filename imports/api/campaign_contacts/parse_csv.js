import { CampaignContacts } from './campaign_contacts.js'

export const parseCSV  = (file, callback) => {
  Papa.parse(file, {
    header: true,
    complete: ({data, meta}, file) => {
      // TODO: Validate fields
      const fields = meta.fields

      const customFields = fields.filter((field) => CampaignContacts.requiredUploadFields.indexOf(field) === -1)
      callback({
        customFields,
        contacts: data
      })
    }
  })
}