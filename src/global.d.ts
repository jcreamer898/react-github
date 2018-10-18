interface IHeaderProps {
    text: string;
    logo: string;
}

interface IGithubUser {
    avatar_url?: string;
    bio?: null
    blog?: string;
    company?: string;
    created_at?: string;
    email?: null
    events_url?: string;
    followers?: number;
    followers_url?: string;
    following?: number;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    hireable?: null
    html_url?: string;
    id?: number;
    location?: string;
    login?: string;
    name?: string;
    node_id?: string;
    organizations_url?: string;
    public_gists?: number;
    public_repos?: number;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: "User";
    updated_at?: Date;
    url?: string;
}

interface ISearchState {
    query: string;
    user: IGithubUser;
}

interface ISearchProps { 
    render: (user: IGithubUser) => React.ReactChild;
    onSearch?: (user: IGithubUser) => void;
    query?: string;
}