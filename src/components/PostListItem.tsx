import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '@/types';
import { MessageCircle, Repeat, Heart, Eye, Share2 } from 'lucide-react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PostListItem = ({ post }: { post: Post }) => {
  const { user } = post;

  return (
    <View className="flex-row px-4 py-3 border-b border-neutral-800/70">
      {/* Profile Image */}
      <Image
        source={{ uri: post.user.avatar_url}}
        className="w-10 h-10 rounded-full mr-3"
      />

      {/* Post Content */}
      <View className="flex-1">
        {/* User Info */}
        <View className="flex-row items-center gap-1 mb-1 flex-wrap">
          <Text className="text-white font-semibold">{post.user.username}</Text>
          {/* Uncomment below if you want to show @username */}
          {/* <Text className="text-neutral-400">@{user.username}</Text> */}
          <Text className="text-neutral-500 text-xs ml-auto">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Post Body */}
        <Text className="text-white text-base mb-3">{post.content}</Text>

        {/* Action Buttons */}
        <View className="flex-row gap-6 pr-4">
          {/* Comment */}
          <TouchableOpacity className="flex-row items-center gap-1">
            <MessageCircle size={18} color="#d1d5db" />
            <Text className="text-gray-300 text-sm">{0}</Text>
          </TouchableOpacity>

          {/* Retweet */}
          <TouchableOpacity className="flex-row items-center gap-1">
            <Repeat size={18} color="#d1d5db" />
            <Text className="text-gray-300 text-sm">12</Text>
          </TouchableOpacity>

          {/* Love */}
          <TouchableOpacity className="flex-row items-center gap-1">
            <Heart size={18} color="#d1d5db" />
            <Text className="text-gray-300 text-sm">35</Text>
          </TouchableOpacity>

          {/* Views */}
          <View className="flex-row items-center gap-1">
            <Eye size={18} color="#d1d5db" />
            <Text className="text-gray-300 text-sm">105</Text>
          </View>

          {/* Share */}
          <TouchableOpacity>
            <Share2 size={18} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostListItem;
