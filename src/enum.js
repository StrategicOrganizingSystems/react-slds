
export const ButtonTheme = {
  NEUTRAL: 'neutral',
  BRAND: 'brand',
  INVERSE: 'inverse',
  DESTRUCTIVE: 'destructive',
  SUCCESS: 'success',
};

export const IconVariant = {
  UTILITY: 'utility',
  ACTION: 'action',
  CUSTOM: 'custom',
  DOCTYPE: 'doctype',
  STANDARD: 'standard',
  MODIFIERS: 'modifiers'
};


export const IconColor = {
  DEFAULT: 'default',
  WARNING: 'warning',
  ERROR: 'error',
  LIGHT: 'light',
};

export const IconSize = {
  XSMALL: 'x-small',
  SMALL: 'small',
  LARGE: 'large',
};

export const screenSize = {
  XSMALL: 'x-small',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'x-large'
};

// Box
export const BoxSize = {
  XXSMALL: 'xx-small',
  XSMALL: 'x-small',
  SMALL: 'small',
};

// Float
export const FloatType = {
  LEFT: 'left',
  RIGHT: 'right',
  NONE: 'none',
};

// Interaction
export const TextLink = {
  RESET: 'reset',
  FAUX: 'faux',
};

// Margin & Spacing
export const Spacing = {
  XXXSMALL: 'xxx-small',
  XXSMALL: 'xx-small',
  XSMALL: 'x-small',
  SMALL: 'small',
  MEDIUM: 'medium',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'x-large',
};

// Text Body
export const TextBody = {
  REGULAR: 'regular',
  SMALL: 'small',
};

// Text Heading
export const TextHeading = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};


export const TextColor = {
  DEFAULT: 'default',
  WEAK: 'weak',
  ERROR: 'error',
  SUCCESS: 'success',
  INVERSE: 'inverse',
  INVERSEWEAK: 'inverse-weak',
};

export const TextAlign = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

export const SpinnerSize ={
  'XXSMALL': 'xx-small',
  'XSMALL': 'x-small',
  'SMALL': 'small',
  'MEDIUM': 'medium',
  'LARGE': 'large',
};

// Brand
export const Brand = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  NONE: 'none',
};




export const VariantIcons = ['add_contact','add_file','add_photo_video','add_relationship','announcement','apex','approval',
  'back','call','canvas','change_owner','change_record_type','check','clone','close','defer','delete','description','dial_in',
  'download','edit_groups','edit_relationship','edit','email','fallback','filter','flow','follow','following','freeze_user',
  'goal','google_news','info','join_group','lead_convert','leave_group','log_a_call','log_event','manage_perm_sets','map',
  'more','new_account','new_campaign','new_case','new_child_case','new_contact','new_event','new_group','new_lead','new_note',
  'new_notebook','new_opportunity','new_person_account','new_task','new','password_unlock','preview','priority',
  'question_post_action','quote','recall','record','refresh','reject','remove_relationship','remove','reset_password',
  'share_file','share_link','share_poll','share_post','share_thanks','share','sort','submit_for_approval','update_status',
  'update','upload','user_activation','user','view_relationship','web_link'];


function generateCustomIcons() {
  const icons = [];
  const start=1; const end=113;
  for (let i=start; i <= end; ++i) {
    icons.push(`custom${  i}` );
  }
  return icons;
}


export const CustomIcons = generateCustomIcons();

export const DoctypeIcons = ['ai','attachment','audio','box_notes','csv','eps','excel','exe','flash','folder',
  'gdoc','gdocs','gform','gpres','gsheet','html','image','keynote','library_folder',
  'link','mp4','overlay','pack','pages','pdf','ppt','psd','quip_doc','quip_sheet','rtf',
  'slide','stypi','txt','unknown','video','visio','webex','word','xml','zip'];


export const StandardIcons  = ['account','address','announcement','answer_best','answer_private','answer_public',
  'approval','apps_admin','apps','article','asset_relationship','assigned_resource','avatar_loading','avatar',
  'bot','business_hours','calibration','call_history','call','campaign_members','campaign','canvas','carousel',
  'case_change_status','case_comment','case_email','case_log_a_call','case_milestone','case_transcript','case',
  'channel_program_history','channel_program_levels','channel_program_members','channel_programs','client','cms',
  'coaching','connected_apps','contact_list','contact','contract_line_item','contract','custom_notification','custom',
  'customers','dashboard','datadotcom','default','document','drafts','email_chatter','email','empty','endorsement',
  'entitlement_process','entitlement_template','entitlement','entity_milestone','entity','environment_hub','event',
  'feed','feedback','file','flow','folder','forecasts','generic_loading','goals','group_loading','groups','hierarchy',
  'home','household','insights','investment_account','iot_orchestrations','lead_insights','lead_list','lead','link',
  'list_email','live_chat','location','log_a_call','macros','maintenance_asset','maintenance_plan','marketing_actions',
  'merge','messaging_conversation','messaging_session','messaging_user','metrics','news','note','omni_supervisor',
  'operating_hours','opportunity_splits','opportunity','orders','partner_fund_allocation','partner_fund_claim',
  'partner_fund_request','partner_marketing_budget','partners','past_chat','people','performance','person_account',
  'photo','poll','portal','post','pricebook','process','product_consumed','product_item_transaction','product_item',
  'product_request_line_item','product_request','product_required','product_transfer','product','question_best',
  'question_feed','quick_text','quip_sheet','quip','quotes','recent','record','related_list','relationship','report',
  'resource_absence','resource_capacity','resource_preference','resource_skill','return_order_line_item','return_order',
  'reward','rtc_presence','sales_path','scan_card','search','service_appointment','service_contract','service_crew_member',
  'service_crew','service_report','service_resource','service_territory_location','service_territory_member','service_territory',
  'shipment','skill_entity','skill_requirement','skill','social','solution','sossession','survey','task','task2','team_member',
  'template','thanks_loading','thanks','timesheet_entry','timesheet','timeslot','today','topic','topic2','unmatched','user',
  'work_order_item','work_order','work_type'];


export const UtilityIcons = ['activity','ad_set','add','adduser','anchor','animal_and_nature','announcement','answer',
  'answered_twice','apex','approval','apps','arrowdown','arrowup','attach','automate','back','ban','block_visitor','bold',
  'bookmark','breadcrumbs','broadcast','brush','bucket','builder','call','campaign','cancel_file_request','cancel_transfer',
  'capslock','case','cases','center_align_text','change_owner','change_record_type','chart','chat','check','checkin',
  'chevrondown','chevronleft','chevronright','chevronup','classic_interface','clear','clock','close','collapse_all',
  'color_swatch','comments','company','connected_apps','contract_alt','contract','copy_to_clipboard','copy','crossfilter',
  'custom_apps','cut','dash','database','datadotcom','dayview','delete','deprecate','description','desktop_console','desktop',
  'dislike','dock_panel','down','download','edit_form','edit','email','emoji','end_call','end_chat','erect_window','error',
  'event','expand_all','expand_alt','expand','fallback','favorite','feed','file','filter','filterList','flow','food_and_drink',
  'forward','frozen','full_width_view','graph','groups','help','hide','hierarchy','home','identity','image','inbox','info_alt',
  'info','insert_tag_field','insert_template','internal_share','italic','jump_to_bottom','jump_to_top','justify_text','kanban',
  'keyboard_dismiss','knowledge_base','layers','layout','left_align_text','left','level_up','light_bulb','like','link','list',
  'listen','location','lock','log_a_call','logout','lower_flag','macros','magicwand','mark_all_as_read','matrix','merge_field',
  'merge','metrics','minimize_window','missed_call','moneybag','monthlyview','move','muted','new_direct_message','new_window',
  'new','news','note','notebook','notification','office365','offline_cached','offline','omni_channel','open_folder','open',
  'opened_folder','outbound_call','overflow','package_org_beta','package_org','package','page','palette','paste','pause',
  'people','phone_landscape','phone_portrait','photo','picklist','pin','pinned','power','preview','priority','privately_shared',
  'process','push','puzzle','question_mark','question','questions_and_answers','quick_text','quotation_marks','rating',
  'record_create','record','redo','refresh','relate','reminder','remove_formatting','remove_link','replace','reply_all','reply',
  'reset_password','resource_absence','resource_capacity','resource_territory','retweet','richtextbulletedlist','richtextindent',
  'richtextnumberedlist','richtextoutdent','right_align_text','right','rotate','rows','rules','salesforce1','save','search',
  'sentiment_negative','sentiment_neutral','settings','setup_assistant_guide','setup','share_file','share_mobile','share_post',
  'share','shield','shopping_bag','side_list','signpost','smiley_and_people','sms','snippet','socialshare','sort','spinner',
  'standard_objects','stop','strikethrough','success','summary','summarydetail','survey','switch','symbols','sync','table',
  'tablet_landscape','tablet_portrait','tabset','task','text_background_color','text_color','threedots_vertical','threedots',
  'thunder','tile_card_list','topic','touch_action','trail','travel_and_places','trending','turn_off_notifications','type_tool',
  'undelete','undeprecate','underline','undo','unlock','unmuted','up','upload','user_role','user','video','voicemail_drop',
  'volume_high','volume_low','volume_off','warning','weeklyview','wifi','work_order_type','world','yubi_key','zoomin','zoomout'];
