import type { Attribute, Schema } from '@strapi/strapi';

export interface ActivesActives extends Schema.Component {
  collectionName: 'components_actives_actives';
  info: {
    description: '';
    displayName: 'Actives';
    icon: 'store-alt';
  };
  attributes: {
    properties: Attribute.Component<'property.properties', true>;
    tab_name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
  };
}

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    description: '';
    displayName: 'Category';
    icon: 'file-pdf';
  };
  attributes: {
    archive: Attribute.Relation<
      'category.category',
      'oneToOne',
      'api::archive.archive'
    >;
    tab_name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
  };
}

export interface DisplayFundBtnDisplayFundBtn extends Schema.Component {
  collectionName: 'components_display_fund_btn_display_fund_btns';
  info: {
    displayName: 'display_fund_btn';
  };
  attributes: {
    display: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface DocDocs extends Schema.Component {
  collectionName: 'components_doc_docs';
  info: {
    description: '';
    displayName: 'docs';
  };
  attributes: {
    date: Attribute.Date;
    docNumber: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 999;
        },
        number
      >;
    pdf: Attribute.Media<'files'>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface DocumentDocuments extends Schema.Component {
  collectionName: 'components_document_documents';
  info: {
    description: '';
    displayName: 'Documents';
  };
  attributes: {
    Files: Attribute.Component<'files.file', true>;
    tab_name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    Questions: Attribute.Component<'questions.question', true>;
    title: Attribute.String;
  };
}

export interface FilesFile extends Schema.Component {
  collectionName: 'components_files_files';
  info: {
    description: '';
    displayName: 'File';
    icon: 'file-pdf';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    pdf: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.Required;
  };
}

export interface GroupsGroup extends Schema.Component {
  collectionName: 'components_groups_groups';
  info: {
    description: '';
    displayName: 'group';
    icon: 'users-cog';
  };
  attributes: {
    Members: Attribute.Component<'profile.profiles', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface InfoInfo extends Schema.Component {
  collectionName: 'components_info_infos';
  info: {
    description: '';
    displayName: 'Info';
    icon: 'info';
  };
  attributes: {
    LeftSide: Attribute.Component<'leftside.left-side', true>;
    RightSide: Attribute.Component<'rightside.right-side', true>;
    tab_name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
  };
}

export interface ItemItem extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    description: '';
    displayName: 'Item';
    icon: 'check-square';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface LeftsideLeftSide extends Schema.Component {
  collectionName: 'components_leftside_left_sides';
  info: {
    displayName: 'LeftSide';
    icon: 'angle-double-right';
  };
  attributes: {
    data: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface LinkLinks extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    fund: Attribute.Relation<'link.links', 'oneToOne', 'api::fund.fund'>;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.RichText;
  };
}

export interface MemberItemMemberItem extends Schema.Component {
  collectionName: 'components_member_item_member_items';
  info: {
    description: '';
    displayName: 'member-item';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface MembersMembers extends Schema.Component {
  collectionName: 'components_members_members';
  info: {
    description: '';
    displayName: 'Members';
  };
  attributes: {
    body: Attribute.RichText;
    fullname: Attribute.String & Attribute.Required;
    linkedin: Attribute.String;
    picture: Attribute.Media<'images'> & Attribute.Required;
    role: Attribute.String;
  };
}

export interface MemoriesMemories extends Schema.Component {
  collectionName: 'components_memories_memories';
  info: {
    description: '';
    displayName: 'Memories';
  };
  attributes: {
    date: Attribute.Date;
    docNumber: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 999;
        },
        number
      >;
    pdf: Attribute.Media<'files'>;
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MilestoneMilestones extends Schema.Component {
  collectionName: 'components_milestone_milestones';
  info: {
    description: '';
    displayName: 'milestones';
    icon: 'seedling';
  };
  attributes: {
    LeftText: Attribute.String;
    RightText: Attribute.String;
  };
}

export interface OpenFundsOpenFunds extends Schema.Component {
  collectionName: 'components_open_funds_open_funds';
  info: {
    description: '';
    displayName: 'Open Funds';
  };
  attributes: {
    body: Attribute.RichText;
    icon: Attribute.Media<'images'> & Attribute.Required;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PowerbiPowerbi extends Schema.Component {
  collectionName: 'components_powerbi_powerbis';
  info: {
    description: '';
    displayName: 'Powerbi';
    icon: 'chart-area';
  };
  attributes: {
    source: Attribute.String & Attribute.Required;
    tab_name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ProfileProfiles extends Schema.Component {
  collectionName: 'components_profile_profiles';
  info: {
    description: '';
    displayName: 'Profiles';
    icon: 'address-card';
  };
  attributes: {
    body: Attribute.RichText;
    fullname: Attribute.String & Attribute.Required;
    linkedin: Attribute.String;
    picture: Attribute.Media<'images'> & Attribute.Required;
    role: Attribute.String & Attribute.Required;
  };
}

export interface PropertyProperties extends Schema.Component {
  collectionName: 'components_property_properties';
  info: {
    description: '';
    displayName: 'Properties';
    icon: 'map-signs';
  };
  attributes: {
    body: Attribute.RichText & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface QuestionsQuestion extends Schema.Component {
  collectionName: 'components_questions_questions';
  info: {
    displayName: 'question';
    icon: 'question';
  };
  attributes: {
    body: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface QuizFaq extends Schema.Component {
  collectionName: 'components_quiz_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    Questions: Attribute.Component<'questions.question', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RightsideRightSide extends Schema.Component {
  collectionName: 'components_rightside_right_sides';
  info: {
    description: '';
    displayName: 'RightSide';
    icon: 'angle-double-left';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    description: '';
    displayName: 'slider';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    image_link: Attribute.String;
    youtube: Attribute.String;
  };
}

export interface TabTabs extends Schema.Component {
  collectionName: 'components_tab_tabs';
  info: {
    description: '';
    displayName: 'Tabs';
  };
  attributes: {
    background: Attribute.Media<'images'> & Attribute.Required;
    Item: Attribute.Component<'item.item', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    description: '';
    displayName: 'Team';
  };
  attributes: {
    Members: Attribute.Component<'members.members', true>;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'actives.actives': ActivesActives;
      'category.category': CategoryCategory;
      'display-fund-btn.display-fund-btn': DisplayFundBtnDisplayFundBtn;
      'doc.docs': DocDocs;
      'document.documents': DocumentDocuments;
      'faq.faq': FaqFaq;
      'files.file': FilesFile;
      'groups.group': GroupsGroup;
      'info.info': InfoInfo;
      'item.item': ItemItem;
      'leftside.left-side': LeftsideLeftSide;
      'link.links': LinkLinks;
      'member-item.member-item': MemberItemMemberItem;
      'members.members': MembersMembers;
      'memories.memories': MemoriesMemories;
      'milestone.milestones': MilestoneMilestones;
      'open-funds.open-funds': OpenFundsOpenFunds;
      'powerbi.powerbi': PowerbiPowerbi;
      'profile.profiles': ProfileProfiles;
      'property.properties': PropertyProperties;
      'questions.question': QuestionsQuestion;
      'quiz.faq': QuizFaq;
      'rightside.right-side': RightsideRightSide;
      'slider.slider': SliderSlider;
      'tab.tabs': TabTabs;
      'team.team': TeamTeam;
    }
  }
}
