const axios = require('axios');



export const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};


export const dataLogged = {
  object: 'session',
  id: 'sess_2oaqSa3RiCRtsTn8luydM1c4XoX',
  status: 'active',
  expire_at: 1731722834724,
  abandon_at: 1733710034724,
  last_active_at: 1731118662595,
  last_active_organization_id: null,
  actor: null,
  user: {
    id: 'user_2oZvFxgcVkSfN8s7sKzlYV1YBfI',
    object: 'user',
    username: null,
    first_name: 'Huy',
    last_name: 'Nguyễn',
    image_url: 'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ybU41c3RqRGU0TkhXRkVBY2RmTm1jZ2dmOXciLCJyaWQiOiJ1c2VyXzJvWnZGeGdjVmtTZk44czdzS3psWVYxWUJmSSIsImluaXRpYWxzIjoiSE4ifQ',
    has_image: false,
    primary_email_address_id: 'idn_2oZvBGZDLw8QJXBpTzOeYRAvbZs',
    primary_phone_number_id: null,
    primary_web3_wallet_id: null,
    password_enabled: true,
    two_factor_enabled: false,
    totp_enabled: false,
    backup_code_enabled: false,
    email_addresses: [ [Object] ],
    phone_numbers: [],
    web3_wallets: [],
    passkeys: [],
    external_accounts: [ [Object], [Object], [Object] ],
    saml_accounts: [],
    enterprise_accounts: [],
    public_metadata: {},
    unsafe_metadata: {},
    external_id: null,
    last_sign_in_at: 1731118034733,
    banned: false,
    locked: false,
    lockout_expires_in_seconds: null,
    verification_attempts_remaining: 100,
    created_at: 1731089812757,
    updated_at: 1731118034769,
    delete_self_enabled: true,
    create_organization_enabled: true,
    last_active_at: 1731089812754,
    mfa_enabled_at: null,
    mfa_disabled_at: null,
    legal_accepted_at: null,
    profile_image_url: 'https://www.gravatar.com/avatar?d=mp',
    organization_memberships: []
  },
  public_user_data: {
    first_name: 'Huy',
    last_name: 'Nguyễn',
    image_url: 'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ybU41c3RqRGU0TkhXRkVBY2RmTm1jZ2dmOXciLCJyaWQiOiJ1c2VyXzJvWnZGeGdjVmtTZk44czdzS3psWVYxWUJmSSIsImluaXRpYWxzIjoiSE4ifQ',
    has_image: false,
    identifier: 'tronghuy0077@gmail.com',
    profile_image_url: 'https://www.gravatar.com/avatar?d=mp'
  },
  created_at: 1731118034733,
  updated_at: 1731121851800,
  last_active_token: {
    object: 'token',
    jwt: 'eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ybU41c3RqRGU0TkhXRkVBY2RmTm1jZ2dmOXciLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0IiwiZXhwIjoxNzMxNjQzMDM2LCJpYXQiOjE3MzE2NDI5NzYsImlzcyI6Imh0dHBzOi8vd2l0dHktc2hyZXctNjcuY2xlcmsuYWNjb3VudHMuZGV2IiwibmJmIjoxNzMxNjQyOTY2LCJzaWQiOiJzZXNzXzJvYXFTYTNSaUNSdHNUbjhsdXlkTTFjNFhvWCIsInN1YiI6InVzZXJfMm9adkZ4Z2NWa1NmTjhzN3NLemxZVjFZQmZJIn0.KuF9WeZN28v1js4CFSZ1yJL8S5wTD6FAJO3JXLWXWbABX0tJnMwJNN55SDnMdfQ4Ml0bBwm00z7BWFcBrpjR7ErYFHq7JKr8wG3owbhNTpuas5uDBnXjhCx_UegnK24i2lX4kQXGZ3W7k2DJv9h7ut1Y5u0Sl6_nLi1ebDCHigbSwUaJQmN7FiHIzg8nyo2BrbDQ0Iw5LljlGXZO51ycWnLmNyCwfciph1GzLrxMbnbHYjpx3yL61fOFvqzLbHZcn2aKekyQ7VSwBiqChGuYfXSJm4czUeVQ3Rh7xUJi2HpV2CR4RTqNH1wXIvhF81xLWQKsardTVhL0Y610jTifbw'
  }
}
export const dataNotLogged = []


export const is_correct_email_id = { email: 'tronghuy0077@gmail.com', clerkId: 'user_2oZvFxgcVkSfN8s7sKzlYV1YBfI' }
export const is_wrong_email_id = { email: 'tronghuy0077123123@gmail.com', clerkId: 'user_2oZvFxgcVkSfN8s7sKzlYV1YBfI' }

export const is_correct_path_image = 'data_test/00-Linux-1200x900.png'
export const is_wrong_path_image = ''





