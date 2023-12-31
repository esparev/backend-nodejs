PGDMP         ,                {            backendnodejs    13.7 (Debian 13.7-1.pgdg110+1)    13.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    backendnodejs    DATABASE     a   CREATE DATABASE backendnodejs WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE backendnodejs;
                backendnodejs    false            �            1259    16385    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    backendnodejs    false            �            1259    24623    books    TABLE     �   CREATE TABLE public.books (
    id integer NOT NULL,
    isbn character varying(255) NOT NULL,
    title character varying(500) NOT NULL,
    author character varying(255) NOT NULL,
    release_date date NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.books;
       public         heap    backendnodejs    false            �            1259    24621    books_id_seq    SEQUENCE     �   CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.books_id_seq;
       public          backendnodejs    false    204            �           0    0    books_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
          public          backendnodejs    false    203            �            1259    24610    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap    backendnodejs    false            �            1259    24608    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          backendnodejs    false    202            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          backendnodejs    false    201            2           2604    24626    books id    DEFAULT     d   ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);
 7   ALTER TABLE public.books ALTER COLUMN id DROP DEFAULT;
       public          backendnodejs    false    203    204    204            1           2604    24613    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          backendnodejs    false    202    201    202            �          0    16385    SequelizeMeta 
   TABLE DATA                 public          backendnodejs    false    200   �       �          0    24623    books 
   TABLE DATA                 public          backendnodejs    false    204   6       �          0    24610    users 
   TABLE DATA                 public          backendnodejs    false    202   1       �           0    0    books_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.books_id_seq', 10, true);
          public          backendnodejs    false    203            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          backendnodejs    false    201            4           2606    16389     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            backendnodejs    false    200            :           2606    24633    books books_isbn_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_isbn_key UNIQUE (isbn);
 >   ALTER TABLE ONLY public.books DROP CONSTRAINT books_isbn_key;
       public            backendnodejs    false    204            <           2606    24631    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public            backendnodejs    false    204            6           2606    24620    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            backendnodejs    false    202            8           2606    24618    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            backendnodejs    false    202            =           2606    24634    books books_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.books DROP CONSTRAINT books_user_id_fkey;
       public          backendnodejs    false    202    2872    204            �   Y   x���v
Q���W((M��L�S
N-,M�ɬJ�M-ITRs�	uV�P720260741�4�40�M.JM,I�-IL�I-��*V״��� �{�      �   �  x���A��0�����m+5���qܞ��Pi��z4�K,R9	[��k�즷fO�Q4߼y�V���q�����C���kO|����w���;�s���c~��Z��6GXhi�&���Ej[�]T*�,A4!��'������JC�{�N��m�\x�jyR��ٮ�
%�Q�H��FE�J��SMkݴ���+<�Z]o�D��bh/��)��Mmq��E�+�[�>����ף�,���M�&�0D�� ,ř�b�E��2M ͜V?a��YϷ�o�K��6e��Gw���FV��N:������!�~�R�sm���H��k	ϩ)��]i7 DB�X�!2��<�"��װQ�u!��R�̟�2O���>w�����6�O������������m'K�t�5E��ۈX*�V���:�����BE�LJ}$R&��Ψ���y�T�\�X,2� ����1zv�0���[�4�X�8�1������!y��6��	)}      �   �   x���v
Q���W((M��L�+-N-*Vs�	uV�0�QP��/NU�M,�LT�R��R�2�Kr3s���sA�*FI*��*F�����%N��N�EaUf�e����z�Y�.I�y%�aYYI��y!�&������\\\ 4s,R     