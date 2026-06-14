// get/list/update account and create:book validation edge cases.

export default [
  // Edge Cases for Account Retrieval

  // Test get account that doesn't exist
  {
    name: 'test-get-nonexistent-account',
    pattern: 'get:account',
    params: {
      aref: 'o0/Asset/NonExistent',
    },
    out: {
      ok: false,
      why: 'account-not-found',
    },
  },

  // Test get account by id
  {
    name: 'test-get-account-by-id',
    pattern: 'get:account',
    params: {
      id: 'shop-a0',
    },
    out: {
      ok: true,
      account: {
        id: 'shop-a0',
      },
    },
  },

  // Test get account by account_id
  {
    name: 'test-get-account-by-account-id',
    pattern: 'get:account',
    params: {
      account_id: 'shop-a1',
    },
    out: {
      ok: true,
      account: {
        id: 'shop-a1',
        aref: 'o0/Income/Sales',
      },
    },
  },

  // Test list accounts with org filter
  {
    name: 'test-list-accounts-org',
    pattern: 'list:account',
    params: {
      org_id: 'o0',
    },
    out: {
      ok: true,
      q: { org_id: 'o0' },
    },
  },

  // Test list all accounts (no filter)
  {
    name: 'test-list-all-accounts',
    pattern: 'list:account',
    params: {},
    out: {
      ok: true,
      q: {},
    },
  },

  // Test update account that doesn't exist
  {
    name: 'test-update-nonexistent-account',
    pattern: 'update:account',
    params: {
      aref: 'o0/Asset/NonExistent',
      account: {
        custom_field: 'value',
      },
    },
    out: {
      ok: false,
      why: 'account-not-found',
    },
  },

  // Test update account with no update data
  {
    name: 'test-update-account-no-data',
    pattern: 'update:account',
    params: {
      id: 'shop-a0',
    },
    out: {
      ok: false,
      why: 'no-account-update',
    },
  },

  // Edge Cases for Book Creation

  // Test creating book with missing book object
  {
    name: 'test-missing-book',
    pattern: 'create:book',
    params: {},
    out: {
      ok: false,
      why: 'no-book',
    },
  },

  // Test creating book with no start date
  {
    name: 'test-no-start-book',
    pattern: 'create:book',
    params: {
      book: {
        oref: 'o0',
        name: 'Test Period',
      },
    },
    out: {
      ok: false,
      why: 'no-start',
    },
  },

  // Test creating book with no org
  {
    name: 'test-no-org-book',
    pattern: 'create:book',
    params: {
      book: {
        name: 'Test Period',
        start: 20230101,
      },
    },
    out: {
      ok: false,
      why: 'no-org',
    },
  },

  // Test creating book with no name
  {
    name: 'test-no-name-book',
    pattern: 'create:book',
    params: {
      book: {
        oref: 'o0',
        start: 20230101,
      },
    },
    out: {
      ok: false,
      why: 'no-name',
    },
  },

  // Test creating book with custom time spec
  {
    name: 'test-custom-time-book',
    pattern: 'create:book',
    params: {
      book: {
        id$: 'test-time-book',
        oref: 'o0',
        name: 'Jan 2023',
        start: 20230101,
        end: 20230131,
        time: { kind: 'utc', timezone: 'America/New_York' },
      },
    },
    out: {
      ok: true,
      book: {
        id: 'test-time-book',
        org_id: 'o0',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        name: 'Jan 2023',
        start: 20230101,
        end: 20230131,
        time: { kind: 'utc', timezone: 'America/New_York' },
      },
    },
  },
]
