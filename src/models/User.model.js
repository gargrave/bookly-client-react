export default {
  empty () {
    return {
      id: '',
      email: '',
      createdAt: '',
      updatedAt: '',
      lastLogin: '',
      verified: undefined,
      profile: {
        id: '',
        firstName: '',
        lastName: '',
        createdAt: '',
        updatedAt: ''
      }
    }
  },

  fromAPI (data) {
    return {
      id: data.id,
      email: data.email,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      lastLogin: data.last_login,
      verified: data.verified,
      profile: {
        id: data.profile.id,
        firstName: data.profile.first_name,
        lastName: data.profile.last_name,
        createdAt: data.profile.created_at,
        updatedAt: data.profile.updated_at
      }
    }
  }
}
