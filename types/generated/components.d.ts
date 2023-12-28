import type { Schema, Attribute } from '@strapi/strapi';

export interface ActivesActives extends Schema.Component {
  collectionName: 'components_actives_actives';
  info: {
    displayName: 'Actives';
    icon: 'store-alt';
    description: '';
  };
  attributes: {
    properties: Attribute.Component<'property.properties', true>;
  };
}

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'Category';
    icon: 'file-pdf';
    description: '';
  };
  attributes: {
    archive: Attribute.Relation<
      'category.category',
      'oneToOne',
      'api::archive.archive'
    >;
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
    displayName: 'docs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    docNumber: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 999;
      }>;
    date: Attribute.Date;
    pdf: Attribute.Media;
  };
}

export interface DocumentDocuments extends Schema.Component {
  collectionName: 'components_document_documents';
  info: {
    displayName: 'Documents';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Files: Attribute.Component<'files.file', true>;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String;
    Questions: Attribute.Component<'questions.question', true>;
  };
}

export interface FilesFile extends Schema.Component {
  collectionName: 'components_files_files';
  info: {
    displayName: 'File';
    icon: 'file-pdf';
    description: '';
  };
  attributes: {
    pdf: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface GroupsGroup extends Schema.Component {
  collectionName: 'components_groups_groups';
  info: {
    displayName: 'group';
    icon: 'users-cog';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Members: Attribute.Component<'profile.profiles', true>;
  };
}

export interface InfoInfo extends Schema.Component {
  collectionName: 'components_info_infos';
  info: {
    displayName: 'Info';
    icon: 'info';
  };
  attributes: {
    RightSide: Attribute.Component<'rightside.right-side', true>;
    LeftSide: Attribute.Component<'leftside.left-side', true>;
  };
}

export interface ItemItem extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    displayName: 'Item';
    icon: 'check-square';
    description: '';
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
    title: Attribute.String & Attribute.Required;
    data: Attribute.String & Attribute.Required;
  };
}

export interface LinkLinks extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    title: Attribute.RichText;
    icon: Attribute.Media & Attribute.Required;
    fund: Attribute.Relation<'link.links', 'oneToOne', 'api::fund.fund'>;
  };
}

export interface MemberItemMemberItem extends Schema.Component {
  collectionName: 'components_member_item_member_items';
  info: {
    displayName: 'member-item';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface MembersMembers extends Schema.Component {
  collectionName: 'components_members_members';
  info: {
    displayName: 'Members';
    description: '';
  };
  attributes: {
    fullname: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    linkedin: Attribute.String;
    body: Attribute.RichText;
    picture: Attribute.Media & Attribute.Required;
  };
}

export interface MemoriesMemories extends Schema.Component {
  collectionName: 'components_memories_memories';
  info: {
    displayName: 'Memories';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    docNumber: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 999;
      }>;
    date: Attribute.Date;
    pdf: Attribute.Media;
  };
}

export interface MilestoneMilestones extends Schema.Component {
  collectionName: 'components_milestone_milestones';
  info: {
    displayName: 'milestones';
    icon: 'seedling';
    description: '';
  };
  attributes: {
    LeftText: Attribute.String;
    RightText: Attribute.String;
  };
}

export interface PowerbiPowerbi extends Schema.Component {
  collectionName: 'components_powerbi_powerbis';
  info: {
    displayName: 'Powerbi';
    icon: 'chart-area';
    description: '';
  };
  attributes: {
    source: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ProfileProfiles extends Schema.Component {
  collectionName: 'components_profile_profiles';
  info: {
    displayName: 'Profiles';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    fullname: Attribute.String & Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    linkedin: Attribute.String;
    body: Attribute.RichText;
  };
}

export interface PropertyProperties extends Schema.Component {
  collectionName: 'components_property_properties';
  info: {
    displayName: 'Properties';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.RichText & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
  };
}

export interface QuestionsQuestion extends Schema.Component {
  collectionName: 'components_questions_questions';
  info: {
    displayName: 'question';
    icon: 'question';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.RichText & Attribute.Required;
  };
}

export interface QuizFaq extends Schema.Component {
  collectionName: 'components_quiz_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Questions: Attribute.Component<'questions.question', true>;
  };
}

export interface RightsideRightSide extends Schema.Component {
  collectionName: 'components_rightside_right_sides';
  info: {
    displayName: 'RightSide';
    icon: 'angle-double-left';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
  };
}

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'slider';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    youtube: Attribute.String;
    image_link: Attribute.String;
  };
}

export interface TabTabs extends Schema.Component {
  collectionName: 'components_tab_tabs';
  info: {
    displayName: 'Tabs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    background: Attribute.Media & Attribute.Required;
    Item: Attribute.Component<'item.item', true>;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Members: Attribute.Component<'members.members', true>;
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
