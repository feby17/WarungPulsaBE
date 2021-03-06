PGDMP     "    ,                x            warungpulsa    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    warungpulsa    DATABASE     �   CREATE DATABASE warungpulsa WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Indonesia.1252' LC_CTYPE = 'English_Indonesia.1252';
    DROP DATABASE warungpulsa;
                postgres    false            �            1259    16394    m_produk    TABLE     �   CREATE TABLE public.m_produk (
    kode_produk character varying(100) NOT NULL,
    nama_produk character varying(100),
    jenis character varying(15),
    nominal integer,
    harga integer
);
    DROP TABLE public.m_produk;
       public         heap    postgres    false            �            1259    16400    m_user    TABLE     �   CREATE TABLE public.m_user (
    username character varying(50) NOT NULL,
    password character varying(100),
    name character varying(50)
);
    DROP TABLE public.m_user;
       public         heap    postgres    false            �            1259    16397    t_transaksi    TABLE     �   CREATE TABLE public.t_transaksi (
    kode_transaksi character varying(100) NOT NULL,
    tgl_pembelian date,
    no_hp character varying(13),
    nama_produk character varying(100),
    jenis character varying(15),
    harga integer
);
    DROP TABLE public.t_transaksi;
       public         heap    postgres    false            	          0    16394    m_produk 
   TABLE DATA           S   COPY public.m_produk (kode_produk, nama_produk, jenis, nominal, harga) FROM stdin;
    public          postgres    false    202   �                 0    16400    m_user 
   TABLE DATA           :   COPY public.m_user (username, password, name) FROM stdin;
    public          postgres    false    204          
          0    16397    t_transaksi 
   TABLE DATA           f   COPY public.t_transaksi (kode_transaksi, tgl_pembelian, no_hp, nama_produk, jenis, harga) FROM stdin;
    public          postgres    false    203   8       �
           2606    16404    m_produk m_produk_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.m_produk
    ADD CONSTRAINT m_produk_pkey PRIMARY KEY (kode_produk);
 @   ALTER TABLE ONLY public.m_produk DROP CONSTRAINT m_produk_pkey;
       public            postgres    false    202            �
           2606    16408    t_transaksi m_transaksi_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.t_transaksi
    ADD CONSTRAINT m_transaksi_pkey PRIMARY KEY (kode_transaksi);
 F   ALTER TABLE ONLY public.t_transaksi DROP CONSTRAINT m_transaksi_pkey;
       public            postgres    false    203            �
           2606    16406    m_user m_user_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.m_user
    ADD CONSTRAINT m_user_pkey PRIMARY KEY (username);
 <   ALTER TABLE ONLY public.m_user DROP CONSTRAINT m_user_pkey;
       public            postgres    false    204            	   *   x�30�q����v���	v�42500�42R\1z\\\ �%a            x�KL����L�� �+F��� ]��      
   9   x�30�4202�50�5��4���Nc΀P�`GN#S#.#�Bc\
M�
c���� �_[     