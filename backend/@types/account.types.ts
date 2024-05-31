export interface createAccBody {
  acc_title: string;
  acc_type: string;
  acc_email?: string;
  acc_username?: string;
  acc_password?: string;
  acc_url?: string;
  acc_image?: string;
  acc_notes?: string;
  acc_card_number?: string,
  acc_card_cvc?: string
}

export interface updateAccParams {
  accId: string
}

export interface updateAccBody {
  acc_title: string;
  acc_type?: string;
  acc_email?: string;
  acc_username?: string;
  acc_password?: string;
  acc_url?: string;
  acc_image?: string;
  acc_notes?: string;
  acc_card_number?: string;
  acc_card_cvc?: string;
}